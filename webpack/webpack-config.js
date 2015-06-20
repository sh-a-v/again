var ip                = require('ip');
var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin  = require('ng-annotate-webpack-plugin');
var cssnext           = require('cssnext');

var env          = require('../server/server-env');
var serverConfig = require('../server/server-config');
var entryPoints  = require('./entry-points');

var ipAddress = ip.address();

var getEntry = function() {
  var entry = entryPoints.entry;

  if (env.isDevelopment()) {
    for (var key in entry) {
      if (entry.hasOwnProperty(key)) {
        entry[key].unshift(
          'webpack-dev-server/client?http://' + ipAddress + ':' + serverConfig.webpackPort,
          'webpack/hot/dev-server'
        );
      }
    }
  }

  entry.vendor = [
    'angular',
    'angular-ui-router',
    'angular-resource',
    'angular-touch',
    'velocity-animate',
    'styles/fonts.css'
  ];

  return entry;
};

var getAssetName = function(ext) {
  var hash = ext === 'js' ? 'chunkhash' : 'contenthash';
  var name = env.isDevelopment() ? '[name].build.' : '[name].build.[' + hash + '].';
  return name + ext;
};

var getPlugins = function() {
  var plugins = [];
  var chunks  = entryPoints.chunks;

  chunks.forEach(function(chunk) {
    var htmlWebpackPlugin = new HtmlWebpackPlugin({
      template: './client/index.html',
      chunks: ['vendor', chunk],
      filename: chunk + '.index.html'
    });

    plugins.push(htmlWebpackPlugin);
  });

  var extractTextPlugin  = new ExtractTextPlugin(getAssetName('css'));
  var dedupePlugin       = new webpack.optimize.DedupePlugin();
  var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.build.js');

  plugins.push(
    extractTextPlugin,
    dedupePlugin,
    commonsChunkPlugin
  );

  if (env.isDevelopment()) {
    var hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
    var noErrorsPlugin             = new webpack.NoErrorsPlugin();

    plugins.push(hotModuleReplacementPlugin, noErrorsPlugin);
  } else {
    var ngPlugin     = new ngAnnotatePlugin({
      add: true
    });

    var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    });

    plugins.push(
      ngPlugin,
      uglifyPlugin
    );
  }

  return plugins;
};

var getJSLoader = function() {
  var loaders = ['babel-loader'];

  return loaders.join('!');
};

var getCSSLoader = function() {
  var loaders = ['css-loader', 'postcss-loader'];

  if (env.isSync()) {
    loaders.unshift('style-loader');

    return loaders.join('!');
  } else {
    return ExtractTextPlugin.extract(loaders.join('!'));
  }
};

module.exports = {
  entry: getEntry(),

  resolve: {
    modulesDirectories: ['node_modules', 'client']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: getJSLoader()
      },
      {
        test: /\.css$/,
        loader: getCSSLoader()
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.(woff|jpe?g|png|gif|svg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.(woff|jpe?g|png|gif|svg)\?only-url$/,
        loader: "file-loader"
      }
    ]
  },

  postcss: [
    cssnext({
      import: {
        path: ['client']
      }
    })
  ],

  devtool: env.isSync() ? 'eval' : '',

  output: {
    path: path.resolve('./build'),
    filename: getAssetName('js'),
    publicPath: env.isSync() ? 'http://' + ipAddress + ':' + serverConfig.webpackPort + serverConfig.assetsPath : serverConfig.assetsPath
  },

  plugins: getPlugins()
};
