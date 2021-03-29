import React from 'react';
import { RingProgress, RingProgressOptions, G2 } from '@antv/g2plot';
import * as _ from 'lodash';
import { Attributes, XComponentProps } from '@/types';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import './ring-progress.less';

type XPlotProps = XComponentProps<
  Attributes & {
    /** 指标 */
    measures: string[];
    /** 元信息 */
    meta: Record<string, { alias?: string; icon?: string }>;
    /** 数据 */
    data: object[];
    /** 主题颜色 */
    color?: string[];
    style?: object;
  }
>;

export const XRingProgress: React.FC<XPlotProps> = props => {
  const {
    measures,
    style,
    data,
    meta,
    color = ['#009CFF'],
    theme,
  } = props.attributes;

  return (
    <div data-type="ring-progress" className="full x-plot" style={style || {}}>
      <Header {...props} />
      <div className="plot-container">
        {measures.map((measure, idx) => {
          const dataValue = _.get(data, ['0', measure]);
          const dataSvg = _.get(meta, [measure, 'icon']);
          const strokeColor = color[(idx + measures.length) % measures.length];

          const config = {
            percent: dataValue,
            color: [
              strokeColor,
              theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)',
            ],
            radius: 0.94,
            progressStyle: { lineCap: 'round' as const },
            statistic: {
              title: {
                customHtml: (container, view: G2.View) => {
                  const radius = view.getCoordinate().getRadius();

                  container.className += ' statistic-icon-container';
                  container.style.width = `${radius * 0.48}px`;
                  container.style.height = `${radius * 0.48}px`;
                  // svg icon 溢出不隐藏
                  container.style.overflow = 'visible';
                  // 影响 svg 颜色
                  container.style.fill = strokeColor;
                  return dataSvg;
                },
              },
              content: {
                formatter: datum => `${(datum.percent * 100).toFixed(0)}%`,
                style: {
                  fontSize: '21.15px',
                  color: 'rgba(0,0,0,0.45)',
                  letterSpacing: '-0.13px',
                },
              },
            },
            animation: false as const,
          };
          return (
            <div
              key={`${idx}`}
              className="ring-progress-container"
              style={{ width: `${(1 / measures.length) * 100}%` }}
            >
              <UseG2Plot<RingProgressOptions>
                Ctor={RingProgress}
                options={config}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
