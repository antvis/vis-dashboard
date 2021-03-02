import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import GridLayout, { WidthProvider, Layout } from 'react-grid-layout';
import { XComponentProps } from '@/types';
import { isEditMode } from '@/utils/location';

const ReactGridLayout = WidthProvider(GridLayout);
type XProps = XComponentProps<{
  layout: any[];
}>;

export const XPanel: React.FC<XProps> = ({ attributes, children }) => {
  const [layout, setLayout] = useState<any>([]);

  useEffect(() => {
    setLayout(attributes.layout);
  }, [attributes.layout]);

  const onLayoutChange = (newLayout: Layout[]) => {
    // todo 发起请求保存
    // console.log('layout', newLayout);
  };

  if (!layout.length) {
    return <div></div>;
  }
  return (
    <div className="x-panel full">
      <ReactGridLayout
        className={cx({ 'draggable': isEditMode() })}
        layout={layout}
        cols={24}
        rowHeight={10}
        isResizable={isEditMode()}
        isDraggable={isEditMode()}
        // This turns off compaction so you can place items wherever.
        // verticalCompact={false}
        // This turns off rearrangement so items will not be pushed arround.
        // preventCollision={true}
        onLayoutChange={onLayoutChange}
        // todo 暂时放在头部
        draggableHandle=".header"
        // Margin between items [x, y] in px.
        margin={[16, 16]}
      >
        {children}
      </ReactGridLayout>
    </div>
  );
};
