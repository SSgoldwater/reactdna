var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(process.cwd(), 'cordova/www/js');
var APP_DIR = path.resolve(process.cwd(), 'src');

var config = {
  context: APP_DIR,
  entry: [
    APP_DIR + '/index.js'
  ],
  devtool: 'cheap-module-source-map',
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
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false
        }
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};

module.exports = config;
