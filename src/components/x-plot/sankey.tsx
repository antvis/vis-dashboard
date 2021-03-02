import React, { useState, useEffect } from 'react';
import { Sankey, SankeyOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import { XComponentProps } from '@/types';
import { getData } from '@/utils/get-data';

type XSankeyProps = XComponentProps<SankeyOptions>;

export const XSankey: React.FC<XSankeyProps> = props => {
  const { attributes } = props;

  let chart: Sankey;
  const [config, updateConfig] = useState({
    data: [],
    weightField: '',
    sourceField: '',
    targetField: '',
  });

  useEffect(() => {
    getData(attributes.data).then(data => {
      const { theme } = attributes;
      const label = {
        fields: ['x', 'name'],
        callback: (x: number[], name: string) => {
          const isLast = x[1] === 1; // 最后一列靠边的节点
          return {
            style: {
              fill: theme === 'dark' ? 'rgba(255,255,255,0.65)' : '#545454',
              textAlign: isLast ? 'end' : 'start',
            },
            offsetX: isLast ? -8 : 8,
            content: name,
          };
        },
      };
      updateConfig(_.assign({}, config, attributes, { data, label }));
    });
  }, [attributes]);

  useEffect(() => {
    if (chart) {
      getData(attributes.data).then(data => {
        chart.changeData(data);
      });
    }
  }, [attributes.data]);

  return (
    <div data-type="sankey" className="full x-plot">
      <Header {...props} />
      {!_.isEmpty(config.data) &&
        config.weightField &&
        config.sourceField &&
        config.targetField && (
          <UseG2Plot
            Ctor={Sankey}
            className="plot-container"
            options={config}
            // @ts-ignore
            onReady={chartInstance => (chart = chartInstance)}
          />
        )}
    </div>
  );
};
