const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const MonacoWebpackPlugin = require(`monaco-editor-webpack-plugin`);

exports.onCreateWebpackConfig = ({ actions, loaders, stage, getConfig }) => {
  const config = getConfig();

  if (config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
  } else {
    config.resolve = {
      alias: { '@': path.resolve(__dirname, 'src') },
    };
  }

  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(
    new MonacoWebpackPlugin({
      languages: ['javascript', 'json', 'typescript', 'html'],
    })
  );

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config);
};

exports.createPages = async function ({ actions }) {
  const { createPage } = actions;

  let meta;
  try {
    meta = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'src/examples/meta.json'), 'utf8') ||
        '{}'
    );
  } catch (e) {
    meta = {};
  }

  const exampleTemplate = require.resolve('./src/templates/example.tsx');

  _.each(meta.demos, demo => {
    const source = fs.readFileSync(
      `${path.resolve(__dirname, `src/examples/${demo.filename}`)}`,
      'utf8'
    );
    createPage({
      path: `/gallery/${demo.pathname}`, // required
      component: exampleTemplate,
      context: {
        source,
      },
    });
  });
};
