'use strict';
var _   = require('lodash');
var env = require('./server-env');

var config = {
  assetsPath: '/assets/'
};

var developmentConfig = {
  expressPort: 1440,
  webpackPort: 1441
};

var productionConfig = {

};

module.exports = _.merge(config, env.isDevelopment() ? developmentConfig : productionConfig);
