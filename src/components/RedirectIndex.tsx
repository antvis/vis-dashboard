import React from 'react';
import { navigate, graphql, StaticQuery } from 'gatsby';
import Seo from './Seo';
import PageLoading from './base/page-loading';

class RedirectIndex extends React.PureComponent {
  langKey = '';

  constructor(args: any) {
    super(args);

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      // const langKey = getUserLangKey(['zh', 'en'], 'zh');
      // this.langKey = langKey;
      // // https://github.com/angeloocana/gatsby-plugin-i18n/issues/52#issuecomment-451590961
      // navigate(langKey);
      if (window.location.pathname === '/vis-dashboard' || window.location.pathname === '/vis-dashboard/') {
        navigate('/dashboard-a/');
      }
    }
    
  }

  renderIndex = (data: {
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

  render() {
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
        render={this.renderIndex}
      />
    );
  }
}

export default RedirectIndex;
