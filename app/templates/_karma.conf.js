var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'test/<%= component_name %>_test.js' //just load this file
    ],
    preprocessors: {
      'test/<%= component_name %>_test.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'mocha' ], //report results in this format
    mochaReporter: {
      output: 'full'
    },
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          { 
            test: /\.js$/, 
            exclude: /(node_modules)/,
            loader: 'babel-loader' 
          },
          {
            test: /\.scss$/,
            loader: "style!css!sass"
          }]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    'plugins' : [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-sourcemap-loader'
    ]
  });
};