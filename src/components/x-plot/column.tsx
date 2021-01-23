import React, { useState, useEffect } from 'react';
import { Column, ColumnOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import { getData } from '@/utils/get-data';
import { XComponentProps } from '@/types';
import { getColor } from './area';

type XColumnProps = XComponentProps<ColumnOptions>;

export const XColumn: React.FC<XColumnProps> = props => {
  const { attributes } = props;

  let chart: Column;
  const [config, updateConfig] = useState({
    data: [],
    xField: '',
    yField: '',
  });

  useEffect(() => {
    getData(attributes.data).then(data => {
      updateConfig(
        _.assign({}, config, attributes, { data, color: getColor(attributes) })
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
    <div data-type="column" className="full x-plot">
      <Header {...props} />
      {!_.isEmpty(config.data) && config.xField && config.yField && (
        <UseG2Plot
          Ctor={Column}
          className="plot-container"
          options={config}
          // @ts-ignore
          onReady={chartInstance => (chart = chartInstance)}
        />
      )}
    </div>
  );
};
