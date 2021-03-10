import React, { useEffect, useState } from 'react';
import { Gauge, GaugeOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import { Attributes, XComponentProps } from '@/types';

type GaugeAttributes = Attributes & {
  style?: object;
  options: GaugeOptions[];
};

type XGaugeProps = XComponentProps<GaugeAttributes>;

export const XGauge: React.FC<XGaugeProps> = props => {
  const { attributes } = props;

  const [options, updateConfig] = useState({ percent: null });
  const [selectedIdx, changeSelectedIdx] = useState(0);

  useEffect(() => {
    const selectOptions = attributes.options[selectedIdx];
    let range = selectOptions.range;
    const theme = attributes.theme;
    if (_.isString(range?.color)) {
      range = {
        ticks: [0, selectOptions.percent, 1],
        color: [
          range.color,
          theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)',
        ],
      };
    }
    updateConfig(_.assign({}, options, selectOptions, { theme, range }));
  }, [attributes, selectedIdx]);

  return (
    <div
      data-type="gauge"
      style={attributes.style || {}}
      className="full x-plot"
    >
      <Header
        {...props}
        changeOption={changeSelectedIdx}
        selectedOption={selectedIdx}
      />
      <UseG2Plot Ctor={Gauge} options={options} className="plot-container" />
    </div>
  );
};
