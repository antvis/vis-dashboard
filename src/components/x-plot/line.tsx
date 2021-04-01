import React, { useState, useEffect } from 'react';
import { Line, LineOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import { XComponentProps } from '@/types';
import { getData } from '@/utils/get-data';
import { LegendTable, LegendTableProps } from '@/components/x-plot/common/legend-table';

type XLineProps = XComponentProps<{
  legendTable?: LegendTableProps,
} & LineOptions>;

export const XLine: React.FC<XLineProps> = props => {
  const { attributes } = props;

  const [config, updateConfig] = useState<LineOptions>({
    data: [],
  });
  const [chart, setChart] = useState<Line>(null);

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
      <div className='plot-container'>
        {!_.isEmpty(config.data) && (
          <UseG2Plot
            Ctor={Line}
            className="plot-container-left"
            options={config}
            // @ts-ignore
            onReady={chartInstance => (setChart(chartInstance))}
          />
        )}
        {
          attributes.legendTable?.show && config.seriesField && !_.isEmpty(config.data) && (
            <LegendTable {...config} plot={chart} className="plot-container-right" showColumnList={attributes.legendTable.showColumnList} />
          )
        }
      </div>
    </div>
  );
};
