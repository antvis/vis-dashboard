import React from 'react';
import * as cx from 'classnames';
import { XComponentProps } from '@/types';
import { Dropdown, Menu } from 'antd';
import * as _ from 'lodash';
import { DownOutlined } from '@ant-design/icons';

export const Header: React.FC<XComponentProps> = ({ attributes }) => {
  const { title, options } = attributes;

  const onMenuClick = (e) => {
    const key = e.key;
    // to do something....
  }

  const overlay = _.isEmpty(options) ? null : (
    <Menu onClick={onMenuClick}>
      {
        _.map(options, (option, idx) => (
          <Menu.Item key={idx}>{option.label}</Menu.Item>
        ))
      }
    </Menu>
  )

  return (
    <div className={cx('header', 'grid-item-move-handler', attributes.moveHandlerClassName)}>
      <span className="title">{title}</span>
      {_.size(options) > 1 && (
        <Dropdown overlay={overlay}>
          <span className={'style-switcher'}>切换样式<DownOutlined /></span>
        </Dropdown>
      )}
    </div>
  );
};
