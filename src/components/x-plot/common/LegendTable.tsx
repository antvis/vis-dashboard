import React, { useMemo } from 'react';
import * as _ from 'lodash';
import { } from '@antv/g2plot';
import { Table } from 'antd';

type Props = {
  data: any[],
  seriesField: string,
  colors: string[],
  yField: string,
  className: string,
}

export const LegendTable: React.FC<Props> = (props) => {
  const { data, seriesField, colors, yField, className = '' } = props;

  // legend 表格数据
  const tableData = useMemo(() => {
    return _.flow(
      (data) => _.groupBy(data, seriesField),
      (data) => _.map(data, (group, key) => {
        return _.reduce(
          group,
          (result, current, index) => {
            const value = current[yField];
            result.maxValue = _.max([result.maxValue, value]);
            result.minValue = _.min([result.minValue, value]);
            result.sum = _.sum([result.sum, value]);
            result.average = _.divide(result.sum, index + 1);
            return result;
          },
          {
            [seriesField]: key,
            maxValue: Number.MIN_SAFE_INTEGER,
            minValue: Number.MAX_SAFE_INTEGER,
            average: 0,
            sum: 0
          })
      })
    )(data);
  }, data);


  const columns = useMemo(() => {
    // 目前先写死， 只有 指标、最大值、最小值、平均值、当前值
    return [
      {
        title: '指标',
        dataIndex: seriesField,
        key: seriesField,
        render: (text: string, record: any, index: number) => {
          return <div>
            <span style={{ width: 10, height: 1 }} />
            <span>{text}</span>
          </div>
        }
      },
      {
        title: '最大值',
        dataIndex: 'maxValue',
        key: 'maxValue'
      },
      {
        title: '最小值',
        dataIndex: 'minValue',
        key: 'minValue',
      },
      {
        title: '平局值',
        dataIndex: 'average',
        key: 'average',
      },
      {
        title: '总和',
        dataIndex: 'sum',
        key: 'sum',
      },
    ]
  }, [seriesField, colors])

  console.log('tableData', tableData, data);
  return (
    <Table
      className={className}
      tableLayout="auto"
      size='small'
      rowKey={seriesField}
      dataSource={tableData}
      columns={columns}
    />
  )
}