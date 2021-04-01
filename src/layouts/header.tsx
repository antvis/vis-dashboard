import React from 'react';
import { Switch } from 'antd';

type Props = {
  siteTitle: string;
  themeSwitcher?: boolean;
};

const Header: React.FC<Props> = ({ siteTitle, themeSwitcher }) => {
  const changeTheme = (checked: boolean) => {
    document.body.dataset['theme'] = checked ? 'dark' : 'light';
  };

  return (
    <header className="site-header">
      <div className="site-title">
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        {themeSwitcher !== false && <Switch
          className="theme-switcher"
          unCheckedChildren="日间"
          checkedChildren="夜间"
          onChange={changeTheme}
        />}
      </div>
    </header>
  );
};

export default Header;
