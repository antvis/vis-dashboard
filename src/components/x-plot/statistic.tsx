import React from 'react';
import { Statistic } from 'antd';
import * as _ from 'lodash';
import { XComponentProps } from '@/types';
import { Header } from '@/components/x-plot/common/header';
import './statistic.less';

type XPlotProps = XComponentProps<{
  /** 指标 */
  measures: string[];
  /** 元信息 */
  meta: Record<string, { alias?: string }>;
  /** 数据 */
  data: object[];
  style?: object;
}>;

export const XStatistic: React.FC<XPlotProps> = props => {
  const { measures, style, data, meta } = props.attributes;

  return (
    <div data-type="statistic" className="full x-plot" style={style || {}}>
      <Header {...props} />
      <div style={{ display: 'flex' }} className="plot-container">
        {measures.map((measure, idx) => {
          const dataValue = _.get(data, ['0', measure]);
          const dataName = _.get(meta, [measure, 'alias']);
          const icon = _.get(meta, [measure, 'icon']);
          return (
            <div className='statistic-item'>
              {icon && <div className='icon'>{icon}</div>}
              <Statistic
                key={`${idx}`}
                title={dataName}
                value={dataValue}
                precision={0}
                style={{ flex: 1 }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
