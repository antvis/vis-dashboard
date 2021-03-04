import React, { useState, useEffect } from 'react';
import { Bar, BarOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import { XComponentProps } from '@/types';
import { getData } from '@/utils/get-data';
import { getColor } from './area';

type XBarProps = XComponentProps<
  BarOptions & {
    styleType?: string | 'rank';
  }
>;

/**
 * 生成排行序列号
 */
const generateOrders = (
  data: object[],
  yField: string,
  colors: string | string[] = '#304658'
) => {
  const color = _.isArray(colors) ? colors[0] : colors;
  return _.map(data, (d, idx) => {
    return {
      type: 'html',
      position: [d[yField], 0],
      html: (container) => {
        // 置于底层, 避免遮挡 elements
        container.style['width'] = 0;
        container.className += ' custom-rank-annotation';
        return `<div style="transform:translate(-100%, -50%);padding-right:16px;width:120px;display:flex;">
          <span class="${idx < 3 ? '' : 'black-background-15'} black-color" style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:${
            idx < 3 ? color : 'rgba(0,0,0,0.15)'
          };color:#fff;font-size:12px;margin-right:8px;">${idx + 1}</span>
        <span style="display:inline-block;opacity:0.85;font-size:12px;width:calc(100% - 24px);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">${
          d[yField]
        }</span>
        </div>`;
      },
    };
  });
};

export const XBar: React.FC<XBarProps> = props => {
  const { attributes } = props;

  let chart: Bar;
  const [config, updateConfig] = useState({
    data: [],
    xField: '',
    yField: '',
    appendPadding: [0, 0, 0, 120],
  });

  useEffect(() => {
    getData(attributes.data).then(data => {
      const color = getColor(attributes);
      const rankType = attributes.styleType === 'rank';
      updateConfig(
        _.assign({}, config, attributes, {
          data,
          color,
          appendPadding: rankType ? [0, 0, 0, 120] : 0,
          annotations: rankType
            ? generateOrders(data, attributes.yField)
            : [],
        })
      );
    });
  }, [attributes]);

  return (
    <div data-type="bar" className="full x-plot">
      <Header {...props} />
      {!_.isEmpty(config.data) && config.xField && config.yField && (
        <UseG2Plot
          Ctor={Bar}
          className="plot-container"
          options={config}
          // @ts-ignore
          onReady={chartInstance => (chart = chartInstance)}
        />
      )}
    </div>
  );
};
