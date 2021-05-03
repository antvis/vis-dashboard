import React, { useState, useEffect, ReactNode } from 'react';
import { Area, AreaOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import {
  Explaination,
  ExplainationProps,
} from '@/components/x-plot/common/explaination';
import { XComponentProps } from '@/types';
import { getData } from '@/utils/get-data';

export const getColor = (
  attributes: XComponentProps<AreaOptions>['attributes']
) => {
  const { color } = attributes;
  if (!attributes.seriesField && _.isArray(color)) {
    return color[0];
  }
  return color || '#009CFF';
};

type XAreaProps = XComponentProps<
  AreaOptions & {
    explaination: ExplainationProps;
  }
>;

export const XArea: React.FC<XAreaProps> = props => {
  const { attributes } = props;
  const { explaination } = attributes;

  let chart: Area;
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

  const renderArea = (className: string) => {
    return (
      !_.isEmpty(config.data) &&
      config.xField &&
      config.yField && (
        <UseG2Plot
          Ctor={Area}
          className={className}
          options={config}
          // @ts-ignore
          onReady={chartInstance => (chart = chartInstance)}
        />
      )
    );
  };

  return (
    <div data-type="area" className="full x-plot">
      <Header {...props} />
      {_.isEmpty(explaination) ? (
        renderArea('plot-container')
      ) : (
        <div className="plot-container">
          {renderArea('plot-container-left')}
          <Explaination {...explaination} className="plot-container-right" />
        </div>
      )}
    </div>
  );
};
