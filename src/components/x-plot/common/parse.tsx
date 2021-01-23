import React from 'react';
import * as _ from 'lodash';
import { ReportNode, Report } from '@/types';
import { THEME_COLORS } from '@/themes';
import { getXComponent } from './register';
import './parse.less';

/**
 * 解析报表结构，递归生成 react 节点

 * @returns {ReactElement}
 */
export const parse = (report: Report) => {
  const { layouts, content: reportNode } = report;
  let subComponents = [];
  const { children } = reportNode;
  if (children?.length > 0) {
    subComponents = children.map((child: ReportNode) => {
      return (
        <div key={child.id} className="x-component">
          {parse({ layouts, content: child })}
        </div>
      );
    });
  }

  const ConcreteXComponent = getXComponent(reportNode.tag); // 根据不同的type，注入不同装饰器

  // 这里根据type决定组件具有什么装饰器（功能）,至于实际渲染成什么组件由ReactLoader根据tag，Device的值去决定
  const c = React.createElement(
    ConcreteXComponent,
    {
      // 每个组件以id为key，保证id变化后，组件就unmount，并且这里key一定要放到第一个位置
      key: `${reportNode.id}-d`,
      id: `${reportNode.id}-d`,
      tag: reportNode.tag,
      attributes: _.assign({}, { color: THEME_COLORS }, reportNode.attributes, {
        layout: _.get(layouts, reportNode.id, []),
      }),
    },
    subComponents
  );

  return c;
};
