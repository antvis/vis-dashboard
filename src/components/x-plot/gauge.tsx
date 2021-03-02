import React, { useEffect, useState } from 'react';
import { Gauge, GaugeOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import { XComponentProps } from '@/types';

type XGaugeProps = XComponentProps<
  { style?: object } & { options: GaugeOptions[] }
>;

export const XGauge: React.FC<XGaugeProps> = props => {
  const { attributes } = props;

  const [options, updateConfig] = useState({ percent: null });

  useEffect(() => {
    updateConfig(_.assign({}, options, attributes.options[0]));
  }, [attributes]);

  return (
    <div
      data-type="gauge"
      style={attributes.style || {}}
      className="full x-plot"
    >
      <Header {...props} />
      <UseG2Plot Ctor={Gauge} options={options} className="plot-container" />
    </div>
  );
};
