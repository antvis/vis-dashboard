import React from 'react';
import { Popover, Switch } from 'antd';
import cx from 'classnames';
import { HomeOutlined, GithubFilled } from '@ant-design/icons';
import { navigate } from 'gatsby';

type Props = {
  siteTitle: string;
  githubUrl: string;
  className?: string;
};

const Header: React.FC<Props> = ({ siteTitle, githubUrl, className }) => {
  const changeTheme = (checked: boolean) => {
    document.body.dataset['theme'] = checked ? 'dark' : 'light';
  };

  const checked = document.body.dataset['theme'] === 'dark';

  return (
    <header className={cx('site-header', className)}>
      <div className="site-title">
        <div className="header-actions">
          <HomeOutlined onClick={() => navigate('/home')} style={{ margin: '0 8px 0 4px', fontSize: '16px' }} />
          <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        </div>
        <div className="header-actions">
          <Switch
            className="theme-switcher header-action"
            unCheckedChildren="日间"
            checkedChildren="夜间"
            defaultChecked={checked}
            onChange={changeTheme}
          />
          <Popover
            content="客人，来个 star 呗 😉"
            placement="topRight"
            arrowPointAtCenter
          >
            <a
              href={githubUrl}
              className="header-action"
              style={{ textDecoration: 'none' }}
              target="_blank"
            >
              <GithubFilled className="github-icon action-link" />
            </a>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
