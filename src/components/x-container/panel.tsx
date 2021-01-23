import React, { useState, useEffect } from 'react';
import GridLayout, { WidthProvider, Layout } from 'react-grid-layout';
import { XComponentProps } from '@/types';

const ReactGridLayout = WidthProvider(GridLayout);
type XProps = XComponentProps<{
  layout: any[];
}>;

export const XPanel: React.FC<XProps> = ({ attributes, children }) => {
  const [layout, setLayout] = useState<any>([]);

  useEffect(() => {
    setLayout(attributes.layout);
  }, [attributes.layout]);

  const onLayoutChange = (newLayout: Layout) => {
    // todo 发起请求保存
    // console.log('layout', newLayout);
  };

  return (
    <div className="x-panel full">
      <ReactGridLayout
        layout={layout.map(d => ({ ...d, isDraggable: true }))}
        cols={24}
        rowHeight={10}
        // This turns off compaction so you can place items wherever.
        // verticalCompact={false}
        // This turns off rearrangement so items will not be pushed arround.
        // preventCollision={true}
        onLayoutChange={onLayoutChange}
        // todo 暂时放在头部
        draggableHandle=".header"
        // Margin between items [x, y] in px.
        margin={[16, 16]}
        padding={[0, 0, 0, 0]}
      >
        {children}
      </ReactGridLayout>
    </div>
  );
};
