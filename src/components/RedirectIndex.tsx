import React, { useEffect } from 'react';
import { navigate, graphql, StaticQuery } from 'gatsby';
import Seo from './Seo';
import PageLoading from './base/page-loading';

const RedirectIndex = () => {
  useEffect(() => {
    navigate('dashboard-a');
  }, []);

  const renderIndex = (data: {
    site: {
      siteMetadata: {
        title?: string;
      };
    };
  }) => {
    const {
      site: {
        siteMetadata: { title = '' },
      },
    } = data;
    return (
      <>
        <Seo title={title || 'G2Plot'} />
        <PageLoading />
      </>
    );
  };

  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={renderIndex}
    />
  );
};

export default RedirectIndex;
