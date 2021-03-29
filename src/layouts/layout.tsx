/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';
import './layout.less';

type Props = {
  hideSiteTitle?: boolean;
  siteTitle?: string;
};

const Layout: React.FC<Props> = ({ children, siteTitle, hideSiteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          githubUrl
          author
          contact
          wechat
        }
      }
    }
  `);

  const { title, githubUrl, contact, author, wechat } = data.site.siteMetadata;

  return (
    <>
      {!hideSiteTitle && <Header siteTitle={siteTitle || title} />}
      <main>{children}</main>
      <Footer
        author={author}
        githubUrl={githubUrl}
        contact={contact}
        wechat={wechat}
      />
    </>
  );
};

export default Layout;
