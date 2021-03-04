import React from 'react';
import * as cx from 'classnames';
import { XComponentProps } from '@/types';
import { Dropdown, Menu } from 'antd';
import * as _ from 'lodash';
import { DownOutlined } from '@ant-design/icons';

type HeaderProps = {
  changeOption?: (number) => void;
  selectedOption?: number;
} & XComponentProps;

export const Header: React.FC<HeaderProps> = ({ attributes, changeOption, selectedOption = 0 }) => {
  const { title, options } = attributes;

  const onMenuClick = (e) => {
    const key = e.key;
    changeOption && changeOption(key);
  }

  const overlay = _.isEmpty(options) ? null : (
    <Menu onClick={onMenuClick} selectedKeys={[String(selectedOption)]} className='header-style-switcher-menu'>
      {
        _.map(options, (option, idx) => (
          <Menu.Item key={idx} className='menu-item'>{`样式${idx+1}`}</Menu.Item>
        ))
      }
    </Menu>
  )

  return (
    <div className={cx('header', 'grid-item-move-handler', attributes.moveHandlerClassName)}>
      <span className="title">{title}</span>
      {_.size(options) > 1 && (
        <Dropdown overlay={overlay} >
          <span className={'style-switcher'}>切换样式<DownOutlined /></span>
        </Dropdown>
      )}
    </div>
  );
};
