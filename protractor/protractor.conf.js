'use strict';

let argv = require('yargs').argv

exports.config = {
  specs: ['spec/**/*.spec.js'],
  jasmineNodeOpts: {
    grep: argv.grep
  }
};