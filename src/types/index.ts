import { Layouts } from 'react-grid-layout';

export type LooseObject = Record<string, any>;

export type Attributes = LooseObject & {
  readonly id?: string;
  // 主题
  readonly theme?: string | object;
};

export type ReportNode<A = Attributes> = {
  /** 组件类型，小写开头 */
  tag: string;
  /** 组件 id */
  id: string;
  /** 组件属性 */
  attributes: A;
  children?: ReportNode[];
};

export type Report = {
  // 主题
  theme?: string;
  layouts: Record<string, Layouts>;
  content: ReportNode;
};

export type XComponentProps<A extends Attributes = Attributes> = Omit<
  ReportNode<A>,
  'children'
>;
