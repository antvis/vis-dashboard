import React, { useEffect, useState } from 'react';
import { Liquid, LiquidOptions } from '@antv/g2plot';
import { XComponentProps } from '@/types';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import * as _ from 'lodash';

type XLiquidProps = XComponentProps<LiquidOptions>;

const Default_Options = {
  // 添加默认水波图样式（不然只显示中心文案）
  liquidStyle: () => ({
    fill: '#6193FA',
    stroke: '#6193FA',
  }),
};

export const XLiquid: React.FC<XLiquidProps> = props => {
  const { attributes } = props;

  const [options, updateOptions] = useState({ percent: 0 });

  useEffect(() => {
    updateOptions(_.assign({}, Default_Options, attributes));
  }, [attributes]);

  return (
    <div data-type="liquid" className="full x-plot">
      <Header {...props} />
      <UseG2Plot Ctor={Liquid} options={options} className="plot-container" />
    </div>
  );
};
