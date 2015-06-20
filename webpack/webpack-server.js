var ip               = require('ip');
var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var serverConfig  = require('../server/server-config');
var webpackConfig = require('./webpack-config');

var ipAddress = ip.address();
var compiler = webpack(webpackConfig);

var server = new WebpackDevServer(compiler, {
  contentBase: 'http://' + ipAddress + ':' + serverConfig.expressPort,
  publicPath: 'http://' + ipAddress + ':' + serverConfig.webpackPort + serverConfig.assetsPath,

  historyApiFallback: true,
  hot: true,
  delay: 50,
  stats: {
    colors: true
  }
});

server.listen(serverConfig.webpackPort, ipAddress, function(err) {
  setTimeout(function() {
    console.log('Open http://' + ipAddress + ':' + serverConfig.expressPort);
    console.log('Open http://localhost:' + serverConfig.expressPort);
  }, 4000);

  if (err) {
    console.log('error:', err);
  }
});
