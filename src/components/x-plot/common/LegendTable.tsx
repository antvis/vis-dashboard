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
  showColumnList: Array<'max' | 'min' | 'avg' | 'sum'>;
}

export const LegendTable: React.FC<Props> = (props) => {
  const { className = '', plot, showColumnList = [] } = props;
  if (!plot) return null;
  const { data, seriesField, yField, xField } = plot.options;
  if (!seriesField) return null;
  // 选中的 legend
  const [selected, setSelected] = useState([]);

  /** ② 处理 legend 表格数据 */
  const tableData = useMemo(() => {
    const colors = _.get(plot, ['options', 'color'], []);
    const newData = _.flow(
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
    // 初始化 selected ，默认全部选中
    setSelected(_.map(newData, item => item[seriesField]) || []);
    return newData
  }, [data, plot]);

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
        sorter: (a, b) => a.max - b.max,
      },
      {
        title: '最小值',
        dataIndex: 'min',
        key: 'min',
        sorter: (a, b) => a.min - b.min,
      },
      {
        title: '平局值',
        dataIndex: 'avg',
        key: 'avg',
        sorter: (a, b) => a.avg - b.avg,
      },
      {
        title: '总和',
        dataIndex: 'sum',
        key: 'sum',
        sorter: (a, b) => a.sum - b.sum,
      },
    ];
    return _.filter(list, item => [seriesField, ...showColumnList].includes(item.key));
  }, [seriesField, plot, showColumnList])

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