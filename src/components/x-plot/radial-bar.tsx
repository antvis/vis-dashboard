import React, { useState, useEffect } from 'react';
import { RadialBar, RadialBarOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import { getData } from '@/utils/get-data';
import { XComponentProps } from '@/types';

type XRadialBarProps = XComponentProps<RadialBarOptions>;

export const XRadialBar: React.FC<XRadialBarProps> = props => {
  const { attributes } = props;

  let chart: RadialBar;
  const [options, updateOptions] = useState<RadialBarOptions>({
    animation: false as const,
    data: [],
  });

  useEffect(() => {
    getData(attributes.data).then(data => {
      updateOptions(_.assign({}, options, attributes, { data }));
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
    <div data-type="radial-bar" className="full x-plot">
      <Header {...props} />
      {!_.isEmpty(options.data) && (
        <UseG2Plot<RadialBarOptions>
          Ctor={RadialBar}
          className="plot-container"
          options={options}
          // @ts-ignore
          onReady={chartInstance => (chart = chartInstance)}
        />
      )}
    </div>
  );
};
