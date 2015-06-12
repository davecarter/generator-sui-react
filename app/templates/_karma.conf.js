module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' /*, 'Chrome' */ ],

    frameworks: [ 'browserify', 'mocha' ],

    autoWatch: false,
    singleRun: true,
    
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/**/*-test.js'
    ],

    preprocessors: {
      'test/**/*-test.js': [ 'browserify' ]
    },

    reporters: [ 'spec' ],

    browserify: {
      debug: true,
      extensions: ['.js', '.jsx'],
      transform: [ 'babelify' ]
    }    
  });
};
