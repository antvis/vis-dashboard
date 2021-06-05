const fs = require('fs');
const path = require('path');
const { Extractor, ExtractorConfig } = require('@microsoft/api-extractor');

const getExtraLib = name => {
  try {
    const extractorConfig = ExtractorConfig.loadFileAndPrepare(
      path.resolve('./api-extractor.json')
    );
    const extractorResult = Extractor.invoke(extractorConfig, {
      localBuild: true,
      showVerboseMessages: true,
    });
    if (extractorResult.succeeded) {
      const typeFilePath = extractorResult.extractorConfig.untrimmedFilePath;
      if (typeFilePath) {
        return `declare module '${name}'{
          ${fs.readFileSync(typeFilePath, `utf8`)}
        }`;
      }
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(`api-extractor warn: ${e.message}`);
  }
  return '';
};

module.exports = {
  pathPrefix: '/vis-dashboard',
  siteMetadata: {
    title: '👋 Vis Dashboard | AntV',
    githubUrl: 'https://github.com/antvis/vis-dashboard',
    author: 'AntV',
    contact: 'https://github.com/antvis',
    extraLib: getExtraLib('@antv/g2plot'),
  },
  plugins: [
    {
      // https://developers.google.com/analytics/devguides/collection/gtagjs?hl=zh-cn
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingIds: ['G-6VXDT1LH44'],
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        strictMath: true,
        // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-less#v400
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#873bf4',
            '@font-family': 'Arial',
          },
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antv ThemeSet`,
        short_name: `Antv ThemeSet`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        icon: require.resolve(`./src/static/images/favicon.png`), // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
