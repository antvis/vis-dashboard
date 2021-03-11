import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import * as _ from 'lodash';
import { WidthProvider, Layout, Responsive, Layouts } from 'react-grid-layout';
import { XComponentProps } from '@/types';
import { isEditMode } from '@/utils/location';
import PageLoading from '../base/page-loading';

const ReactGridLayout = WidthProvider(Responsive);
type XProps = XComponentProps<{
  layout: Layouts;
}>;

export const XPanel: React.FC<XProps> = ({ attributes, children }) => {
  const [layout, setLayout] = useState<any>({});

  useEffect(() => {
    setLayout(attributes.layout);
  }, [attributes.layout]);

  const onLayoutChange = (newLayout: Layout[], allLayouts: Layouts) => {
    // todo 发起请求保存
    // console.log('layout', allLayouts);
  };

  if (_.isEmpty(layout)) {
    return <PageLoading />;
  }
  return (
    <div className="x-panel full">
      <ReactGridLayout
        className={cx({ draggable: isEditMode() })}
        layouts={layout}
        // breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{ lg: 24, md: 24, sm: 24, xs: 12, xxs: 4 }}
        rowHeight={10}
        isResizable={isEditMode()}
        isDraggable={isEditMode()}
        // This turns off compaction so you can place items wherever.
        // verticalCompact={false}
        // This turns off rearrangement so items will not be pushed arround.
        // preventCollision={true}
        onLayoutChange={onLayoutChange}
        draggableHandle=".grid-drag-handler"
        // Margin between items [x, y] in px.
        containerPadding={[0, 0]}
        margin={[16, 16]}
      >
        {children}
      </ReactGridLayout>
    </div>
  );
};
