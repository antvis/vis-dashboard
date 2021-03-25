/**
 * legendTable
 * 目前以 seriesField 作为区分，如果没有 seriesField 不展示
 */
import React, { useEffect, useMemo, useState } from 'react';
import * as _ from 'lodash';
import { Line, G2 } from '@antv/g2plot';
import { Table } from 'antd';
import './legendTable.less';

type Props = {
  className: string,
  plot: Line,
  showColumnList: Array<'max' | 'min' | 'avg' | 'sum' | 'current'>;
}

export const LegendTable: React.FC<Props> = (props) => {
  const { className = '', plot, showColumnList = [] } = props;
  if (!plot) return null;
  const { data, seriesField, yField, xField } = plot.options;
  if (!seriesField) return null;
  // 当前值 默认第一个数据
  const [currentIndex, setCurrentIndex] = useState(_.get(data, [0, xField]));
  // 选中的 legend
  const [selected, setSelected] = useState([]);

  /** ① 注册 tooltip 锁定事件 start */
  useEffect(() => {
    G2.registerInteraction('locked-tooltip', {
      start: [
        {
          trigger: "plot:click",
          action: context => {
            const locked = context.view.isTooltipLocked();
            if (locked) {
              // 如果已锁定，解锁
              context.view.unlockTooltip();
              context.view.emit("tooltip:unlock");
            } else {
              // 如果未锁定，根据鼠标坐标获得对应数据 X轴 的值
              const { x, y } = context.event;
              const data = context.view.getSnapRecords({ x, y });
              const xValue: number | undefined = data.length
                ? data[0]._origin[xField]
                : undefined;
              context.view.emit("tooltip:lock", xValue);
              context.view.lockTooltip();
            }
          }
        },
        { trigger: "plot:mousemove", action: "tooltip:show" }
      ],
      end: [{ trigger: "plot:mouseleave", action: "tooltip:hide" }]
    });
    // 如果不展示当前值，不开启锁定 tooltip 功能
    if (!showColumnList.includes('current')) return;
    plot.chart.interaction('locked-tooltip');
    plot.chart.on('tooltip:lock', (key) => setCurrentIndex(key));
    return () => plot.chart.removeInteraction('locked-tooltip');
  }, [])

  /** ② 处理 legend 表格数据 start */
  const dataInfo = useMemo(() => {
    const colors = _.get(plot, ['options', 'color'], []);
    return _.flow(
      // 依据 seriesField 分组
      (data) => _.groupBy(data, seriesField),
      // 对分组数据计算最大值、最小值、总和、平均值
      (data) => _.map(data, (group, key) => {
        return _.reduce(
          group,
          (result, current, index) => {
            const value = current[yField];
            result.max = _.max([result.max, value]);
            result.min = _.min([result.min, value]);
            result.sum = _.sum([result.sum, value]);
            result.avg = _.divide(result.sum, index + 1)?.toFixed(2);
            return result;
          },
          {
            [seriesField]: key,
            max: Number.MIN_SAFE_INTEGER,
            min: Number.MAX_SAFE_INTEGER,
            avg: '0.00',
            sum: 0,
          })
      }),
      // 依据顺序绑定对应的 color（存在排序，需绑定 color ）
      (data) => _.map(data, (item, index) => ({ ...item, color: colors[index] })),
    )(data);
  }, [data, plot]);

  const tableData = useMemo(() => {
    // 初始化 selected ，默认全部选中
    setSelected(_.map(dataInfo, item => item[seriesField]) || []);
    // 数据源添加当前值（锁定 tooltip 时的值）
    const currentValue = _.filter(data, item => item[xField] === currentIndex);
    return _.map(dataInfo, item => {
      return {
        ...item,
        current: _.get(
          _.find(currentValue, { [seriesField]: item[seriesField] }),
          yField)
      }
    })
  }, [dataInfo, data, currentIndex, xField, seriesField])

  /** ③ 处理表格 column start */
  const columns = useMemo(() => {
    // 目前写死只有 指标、最大值、最小值、平均值、当前值，依据传入的 showColumnList 展示
    const list = [
      {
        title: '指标',
        dataIndex: seriesField,
        key: seriesField,
        render: (text: string, record: any) => {
          return <div className='index-column'>
            {
              !_.isEmpty(record.color) && <div style={{ backgroundColor: record.color }} className='marker' />
            }
            <span>{text}</span>
          </div>
        }
      },
      {
        title: '最大值',
        dataIndex: 'max',
        key: 'max',
        // defaultSortOrder: 'descend',
        sorter: (a, b) => a.max - b.max,
      },
      {
        title: '最小值',
        dataIndex: 'min',
        key: 'min',
        // defaultSortOrder: 'descend',
        sorter: (a, b) => a.min - b.min,
      },
      {
        title: '平局值',
        dataIndex: 'avg',
        key: 'avg',
        // defaultSortOrder: 'descend',
        sorter: (a, b) => a.avg - b.avg,
      },
      {
        title: '总和',
        dataIndex: 'sum',
        key: 'sum',
        // defaultSortOrder: 'descend',
        sorter: (a, b) => a.sum - b.sum,
      },
      {
        title: currentIndex,
        dataIndex: 'current',
        key: 'current'
      }
    ];
    return _.filter(list, item => [seriesField, ...showColumnList].includes(item.key));
  }, [seriesField, plot, showColumnList, currentIndex])

  /** ④ 处理 legend 点击事件与图表的联动 */
  useEffect(() => {
    plot.chart.filter(seriesField, value => _.includes(selected, value))
    plot.chart.render(true);
  }, [selected, plot])

  return (
    <Table
      className={`legend-table ${className}`}
      size='small'
      rowKey={seriesField}
      dataSource={tableData}
      columns={columns}
      pagination={false}
      rowClassName={(record) => {
        const key = _.get(record, seriesField);
        return _.includes(selected, key) ? 'row' : 'row unselected-row';
      }}
      onRow={(record) => ({
        onClick: () => {
          setSelected(old => {
            const key = _.get(record, seriesField);
            return _.includes(old, key) ? _.filter(old, item => item !== key) : [...old, key];
          })
        }
      })}
    />
  )
}