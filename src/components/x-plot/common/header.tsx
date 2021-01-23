import React from 'react';
import * as cx from 'classnames';
import { XComponentProps } from '@/types';

export const Header: React.FC<XComponentProps> = ({ attributes }) => {
  return (
    <div className={cx('header', 'grid-item-move-handler', attributes.moveHandlerClassName)}>
      <span className="title">{attributes.title}</span>
    </div>
  );
};
