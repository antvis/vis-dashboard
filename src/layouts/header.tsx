import React from 'react';
import { Switch } from 'antd';

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }) => (
  <div className="site-header">
    <div className="site-title">
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      <Switch className="theme-switcher" unCheckedChildren='日间' checkedChildren='夜间'/>
    </div>
  </div>
);

export default Header;
