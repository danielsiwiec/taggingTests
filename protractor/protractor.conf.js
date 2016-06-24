'use strict';

let argv = require('yargs').argv

console.log(`DISPLAY IS: ${process.env.DISPLAY}`)

exports.config = {
  specs: ['spec/**/*.spec.js'],
  capabilities: {
    browserName: 'firefox'
  }
}
