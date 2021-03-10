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
  const [selectedOption, changeOption] = useState(0);

  useEffect(() => {
    updateConfig(_.assign({}, options, attributes.options[selectedOption]));
  }, [attributes, selectedOption]);

  return (
    <div
      data-type="gauge"
      style={attributes.style || {}}
      className="full x-plot"
    >
      <Header {...props} changeOption={changeOption} selectedOption={selectedOption} />
      <UseG2Plot Ctor={Gauge} options={options} className="plot-container" />
    </div>
  );
};
