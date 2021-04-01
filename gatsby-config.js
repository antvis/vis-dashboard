module.exports = {
  pathPrefix: '/vis-dashboard',
  siteMetadata: {
    title: '👋 Visulization dashboard (可视化精选 · 建设中)',
    githubUrl: 'https://github.com/antvis/vis-dashboard',
    author: 'visiky',
    contact: 'https://github.com/visiky',
  },
  plugins: [
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
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#009CFF',
            'font-family': 'Arial',
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  flags: {
    DEV_SSR: false,
  },
};
