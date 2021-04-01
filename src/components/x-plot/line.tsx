import React, { useState, useEffect } from 'react';
import { Line, LineOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import { XComponentProps } from '@/types';
import { getData } from '@/utils/get-data';

type XLineProps = XComponentProps<LineOptions>;

export const XLine: React.FC<XLineProps> = props => {
  const { attributes } = props;

  let chart: Line;
  const [config, updateConfig] = useState({
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
      {!_.isEmpty(config.data) && (
        <UseG2Plot
          Ctor={Line}
          className="plot-container"
          options={config}
          // @ts-ignore
          onReady={chartInstance => (chart = chartInstance)}
        />
      )}
    </div>
  );
};
