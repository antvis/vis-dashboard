import React, { useEffect, useState } from 'react';
import { Badge } from 'antd';
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
    badge?: string;
    author?: string;
    contact?: string;
  }[];
  thirdPartyCharts?: {
    image: string;
    name: string;
    url: string;
    badge?: string;
    author?: string;
    contact?: string;
  }[];
};

const isBrowser = typeof document !== 'undefined';

export const Home: React.FC<Props> = ({
  dashboards,
  charts,
  thirdPartyCharts,
}) => {
  const gotoDashboard = (path: string) => {
    path && navigate(`../${path}`);
  };

  const openUrl = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url);
    }
  };

  const openNewWindow = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, 'blank');
    }
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

  const renderAuthor = (author: string, contact: string) => {
    return author ? (
      <span className="dashboard-author" onClick={() => openNewWindow(contact)}>
        ❤️ Made by <span>{author}</span>
      </span>
    ) : null;
  };

  return (
    <div className="home-page">
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
              onClick={() => gotoDashboard(path)}
            >
              <span className="dashboard-description">
                <span>{name}</span>
              </span>
            </div>
          );
        })}
      </div>
      {_.size(charts) ? (
        <div>
          <h2>Gallery</h2>
          <div className="dashboard-container">
            {charts.map(
              (
                { image, name, path, darkImage, badge, author, contact },
                idx
              ) => {
                return (
                  <Badge.Ribbon text={badge || 'Other'}>
                    <div
                      className={`dashboard-item ${!path ? 'disable' : ''}`}
                      style={{
                        backgroundImage: `url(${
                          (themeMode === 'dark' && darkImage) || image
                        })`,
                      }}
                      key={`${idx}`}
                      onClick={() => gotoDashboard(path)}
                    >
                      <span className="dashboard-description">
                        <span>{name}</span>
                      </span>
                    </div>
                    <div>{renderAuthor(author, contact)}</div>
                  </Badge.Ribbon>
                );
              }
            )}
          </div>
        </div>
      ) : null}
      {_.size(thirdPartyCharts) ? (
        <div>
          <h2>Third party charts</h2>
          <div className="dashboard-container">
            {thirdPartyCharts.map(
              ({ image, name, url, badge, author, contact }, idx) => {
                return (
                  <Badge.Ribbon text={badge || 'Other'}>
                    <div
                      className={`dashboard-item`}
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                      key={`${idx}`}
                      onClick={() => openUrl(url)}
                    >
                      <span className="dashboard-description">
                        <span>{name}</span>
                      </span>
                    </div>
                    <div>{renderAuthor(author, contact)}</div>
                  </Badge.Ribbon>
                );
              }
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
