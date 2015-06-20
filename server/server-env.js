var _  = require('lodash');
var fs = require('fs');

var envs = [
  'production',
  'development',
  'sync'
];

var env = process.argv[2];

if (env && _.includes(envs, env)) {
  fs.writeFileSync('.env', env, {
    encoding: 'utf8'
  });
} else {
  env = undefined;
}

module.exports = {
  getEnv: function() {
    return env || fs.readFileSync('.env', {
      encoding: 'utf8'
    });
  },
  isProduction: function() {
    return this.getEnv() === 'production';
  },
  isDevelopment: function() {
    return this.getEnv() === 'development' || this.isSync();
  },
  isSync: function() {
    return this.getEnv() === 'sync';
  }
};
