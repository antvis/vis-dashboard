import React from 'react';

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }) => (
  <div className="site-header">
    <div className="site-title">
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
    </div>
  </div>
);

export default Header;
