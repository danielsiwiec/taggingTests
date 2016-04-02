module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    singleRun: true,
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/**/*.js',
      'spec/**/*.js'
    ],
    preprocessors: {
      "spec/**/*.js": ["babel"],
      "src/**/*.js": ["babel"]
    },
    babelPreprocessor: {
      options: {
        presets: ["es2015"]
      }
    },
    client: {
      args: ['--grep', config.grep]
    }
  })
}
