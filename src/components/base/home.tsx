import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import _ from 'lodash';
import './home.less';

type Props = {
  dashboards: {
    image: string;
    name: string;
    path: string;
    darkImage?: string;
  }[];
  charts?: {
    image: string;
    name: string;
    path: string;
    darkImage?: string;
  }[];
};

const isBrowser = typeof document !== 'undefined';

export const Home: React.FC<Props> = ({ dashboards, charts }) => {
  const gotoDashboard = (path: string) => {
    path && navigate(`../${path}`);
  };

  const [themeMode, setThemeMode] = useState<string>();

  useEffect(() => {
    setThemeMode(isBrowser ? document.body.dataset.theme : '');

    const observer = new MutationObserver(([record]) => {
      if (
        record.target.nodeName === 'BODY' &&
        record.attributeName === 'data-theme'
      ) {
        setThemeMode(isBrowser ? document.body.dataset.theme : '');
      }
    });

    observer.observe(document.body, { attributes: true });
  }, []);

  return (
    <div className="dashboard-container">
      {dashboards.map(({ image, name, path, darkImage }, idx) => {
        return (
          <div
            className={`dashboard-item ${!path ? 'disable' : ''}`}
            style={{
              backgroundImage: `url(${
                (themeMode === 'dark' && darkImage) || image
              })`,
            }}
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
      {_.size(charts) ? (
        <div>
          <h3>Gallery</h3>
          {charts.map(({ image, name, path, darkImage }, idx) => {
            return (
              <div
                className={`dashboard-item ${!path ? 'disable' : ''}`}
                style={{
                  backgroundImage: `url(${
                    (themeMode === 'dark' && darkImage) || image
                  })`,
                }}
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
      ) : null}
    </div>
  );
};
