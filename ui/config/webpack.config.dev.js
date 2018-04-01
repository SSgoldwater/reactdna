var webpack = require('webpack');
var path = require('path');
var Dotenv = require('dotenv-webpack');

var BUILD_DIR = path.resolve(process.cwd(), 'build');
var APP_DIR = path.resolve(process.cwd(), 'src');

var config = {
  context: APP_DIR,
  entry: [
    'react-hot-loader/patch',
    APP_DIR + '/index.js'
  ],
  devtool: 'eval',
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loaders : ['babel-loader?cacheDirectory'],
        exclude: '/node_modules/'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(APP_DIR),
      path.resolve("./node_modules"),
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv()
  ],
  devServer: {
    contentBase: BUILD_DIR,
    host: "0.0.0.0",
    hot: true,
    inline: true,
    historyApiFallback: true
  }
};

module.exports = config;
