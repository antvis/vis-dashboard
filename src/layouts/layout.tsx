/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import Header from './header';
import Footer from './footer';
import Seo from './seo';
import './layout.less';

type Props = {
  hideSiteTitle?: boolean;
  siteTitle?: string;
  /** 网站布局 · 头部 classname */
  headerClassName?: string;
  /** 网站布局 · 主体 classname */
  mainClassName?: string;
  /** 网站布局 · 脚部 classname */
  footerClassName?: string;
  /** 是否开启主题模式切换 */
  themeModeSwitcher?: boolean;
};

const Layout: React.FC<Props> = ({
  children,
  siteTitle,
  hideSiteTitle,
  headerClassName,
  mainClassName,
  footerClassName,
  themeModeSwitcher,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          githubUrl
          author
          contact
        }
      }
    }
  `);

  const { title, githubUrl, contact, author } = data.site.siteMetadata;

  return (
    <>
      <Seo title="Vis Dashboard | AntV" />
      {!hideSiteTitle && (
        <Header
          siteTitle={siteTitle || title}
          githubUrl={githubUrl}
          className={headerClassName}
          themeModeSwitcher={themeModeSwitcher}
        />
      )}
      <main className={cx(mainClassName)}>{children}</main>
      <Footer author={author} contact={contact} className={footerClassName} />
    </>
  );
};

export default Layout;
