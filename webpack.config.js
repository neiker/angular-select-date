const NODE_ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
* DEPENDENCIES
*/
const webpack = require('webpack');
const path = require('path');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

/**
* DEFINITIONS
*/
// https://github.com/webpack/docs/wiki/configuration#context
const context = process.cwd();

// http://webpack.github.io/docs/configuration.html#entry
const entry = './src/main.js';

// http://webpack.github.io/docs/configuration.html#output
const output = {
  path: './build',
  publicPath: '/build',
  filename: '[name].bundle.js',
};

/*
  http://webpack.github.io/docs/plugins.html
  https://webpack.github.io/docs/list-of-plugins.html
 */
const plugins = [
  new webpack.optimize.DedupePlugin(),
  new NgAnnotatePlugin({ add: true }),
];

if (NODE_ENV !== 'development') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    drop_console: true,
  }));
}

// http://webpack.github.io/docs/loaders.html
const loaders = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    query: {
      presets: [
        require.resolve('babel-preset-es2015'),
        require.resolve('babel-preset-stage-2'),
      ],
    },
  },
];

// http://webpack.github.io/docs/configuration.html#resolve
const resolve = {
  extensions: ['', '.js'],
  fallback: path.join(context, 'node_modules'),
};

// http://webpack.github.io/docs/configuration.html#resolveloader
const resolveLoader = {
  root: path.join(__dirname, 'node_modules'),
};

const devServer = {
  host: 'localhost',
  port: 8080,
  https: false,
};

/**
* EXPORTS
*/
module.exports = {
  context,
  entry,
  output,
  plugins,
  module: {
    loaders,
  },
  resolve,

  resolveLoader,

  devServer,
};
