import React from 'react';
import { navigate } from 'gatsby';
import './home.less';

type Props = {
  dashboards: { image: string; name: string; path: string }[];
};

export const Home: React.FC<Props> = ({ dashboards }) => {
  const gotoDashboard = (path: string) => {
    path && navigate(`../${path}`);
  };

  return (
    <div className="dashboard-container">
      {dashboards.map(({ image, name, path }, idx) => {
        return (
          <div
            className={`dashboard-item ${!path ? 'disable' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            key={`${idx}`}
          >
            <span
              className="dashboard-description"
              onClick={() => gotoDashboard(path)}
            >
              <span>{name}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
