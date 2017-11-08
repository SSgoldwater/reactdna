var webpack = require('webpack');
var path = require('path');

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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    hot: true,
    inline: true
  }
};

module.exports = config;
