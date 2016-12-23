var path = require('path');

var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  // Makes Fetch polyfill available.
  entry: [
    './entry.js',
  ],
  devtool: 'eval',
  devServer: {
    port: 8081,
  },
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8081/',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=react-hmre',],
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=react-hmre',],
      },
    ],
  },

  // Webpack will look here for modules when require() is called.
  resolve: {
    root: [
      path.resolve('./app'),
    ],
    extensions: [
      '', '.js', '.jsx',
    ],
  },

  plugins: [
    new DashboardPlugin(),
  ],
};