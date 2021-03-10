import React, { useState, useEffect } from 'react';
import { Scatter, ScatterOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import { XComponentProps } from '@/types';
import { getData } from '@/utils/get-data';

type XScatterProps = XComponentProps<ScatterOptions>;

export const XScatter: React.FC<XScatterProps> = props => {
  const { attributes } = props;

  let chart: Scatter;
  const [config, updateConfig] = useState({
    data: [],
    xField: '',
    yField: '',
  });

  useEffect(() => {
    getData(attributes.data).then(data => {
      const activeStateStyle = { shadowColor: '#E8EDF3' };
      if (attributes.theme === 'dark') {
        activeStateStyle.shadowColor = 'rgba(255,255,255,0.2)';
      }
      updateConfig(
        _.assign({}, config, attributes, {
          data,
          state: { active: { style: activeStateStyle } },
        })
      );
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
    <div data-type="scatter" className="full x-plot">
      <Header {...props} />
      {!_.isEmpty(config.data) && config.xField && config.yField && (
        <UseG2Plot
          Ctor={Scatter}
          className="plot-container"
          options={config}
          // @ts-ignore
          onReady={chartInstance => (chart = chartInstance)}
        />
      )}
    </div>
  );
};
