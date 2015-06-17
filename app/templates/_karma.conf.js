module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' /*, 'Chrome'*/ ],

    frameworks: [ 'mocha' ],

    autoWatch: false,
    singleRun: true,

    preprocessors: {
      'test/**/*-test.js': [ 'webpack' ]
    },

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/**/*-test.js'
    ],

    webpack: {
      resolve: {
        extensions: ['', '.js', '.jsx'],
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loaders: [ 'babel-loader' ],
            exclude: /(node_modules)/
          }
        ]
      },
    },

    webpackServer: {
      noInfo: true
    },

    reporters: [ 'spec' ]
  });
};
