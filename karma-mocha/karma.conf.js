module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    browsers: ['PhantomJS'],
    singleRun: true,
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/**/*.js',
      'test/**/*.js'
    ],
    preprocessors: {
      "test/**/*.js": ["babel"],
      "src/**/*.js": ["babel"]
    },
    babelPreprocessor: {
      options: {
        presets: ["es2015"]
      }
    },
    client: {
      mocha: {
        grep: config.grep
      }
    }
  })
}
