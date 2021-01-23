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
