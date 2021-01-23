import React, { useState, useEffect } from 'react';
import { Pie, PieOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import { getData } from '@/utils/get-data';
import { XComponentProps } from '@/types';

type XPieProps = XComponentProps<PieOptions>;

export const XPie: React.FC<XPieProps> = props => {
  const { attributes } = props;

  let chart: Pie;
  const [config, updateConfig] = useState({
    data: [],
    angleField: '',
    colorField: '',
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
    <div data-type="pie" className="full x-plot">
      <Header {...props} />
      {!_.isEmpty(config.data) && config.angleField && config.colorField && (
        <UseG2Plot
          Ctor={Pie}
          className="plot-container"
          options={config}
          // @ts-ignore
          onReady={chartInstance => (chart = chartInstance)}
        />
      )}
    </div>
  );
};
