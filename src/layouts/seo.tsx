/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title?: string;
}

const SEO: React.FC<SEOProps> = ({
  description,
  lang = '',
  meta = [],
  title,
}) => {
  const metaDescription = description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content:
            'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content:
            'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `zh_CN`,
  meta: [],
  description: ``,
};

export default SEO;
