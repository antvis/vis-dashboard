export type LooseObject = Record<string, any>;

export type Attributes = LooseObject & {
  readonly id?: string;
  /** className of movable handler */
  readonly moveHandlerClassName?: string;
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
  layouts: Record<string, any[]>;
  content: ReportNode;
};

export type XComponentProps<A extends Attributes = Attributes> = Omit<
  ReportNode<A>,
  'children'
>;
