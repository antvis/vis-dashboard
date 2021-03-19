import React, { useState, useEffect } from 'react';
import { Line, LineOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import { XComponentProps } from '@/types';
import { getData } from '@/utils/get-data';
import { LegendTable } from './common/LegendTable';

type XLineProps = XComponentProps<{
  showLegendTable: boolean,
} & LineOptions>;

export const XLine: React.FC<XLineProps> = props => {
  const { attributes } = props;

  let chart: Line;
  const [config, updateConfig] = useState<LineOptions>({
    data: [],
  });

  useEffect(() => {
    getData(attributes.data).then(data => {
      updateConfig(_.assign({}, config, attributes, { data }));
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
    <div data-type="line" className="full x-plot">
      <Header {...props} />
      <div className='plot-container'>
        {!_.isEmpty(config.data) && (
          <UseG2Plot
            Ctor={Line}
            className="plot-container-left"
            options={config}
            // @ts-ignore
            onReady={chartInstance => (chart = chartInstance)}
          />
        )}
        {
          attributes.showLegendTable && config.seriesField && !_.isEmpty(config.data) && (
            <LegendTable {...config} className="plot-container-right"/>
          )
        }
      </div>
    </div>
  );
};
