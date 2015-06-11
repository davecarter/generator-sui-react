var path = require('path');
var webpack = require('webpack');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var _ = require('lodash');

var merge = function(source, target) {
  return _.merge(target, source, joinArrays);

  // concat possible arrays
  function joinArrays(a, b) {
    if(_.isArray(a) && _.isArray(b)) {
      return a.concat(b);
    }
    if(_.isPlainObject(a) && _.isPlainObject(b)) {
      return _.merge(a, b, joinArrays);
    }

    return a;
  }
};

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: [path.join(ROOT_PATH, 'src/index.jsx')],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        // we are using `eslint-loader` explicitly since
        // we have eslint module installed. This way we
        // can be certain that it uses the right loader
        loaders: ['eslint', 'jscs'],
        include: path.join(ROOT_PATH, 'src'),
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      { 
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin("css/style.css")
  ]
};

var mergeConfig = merge.bind(null, common);

if(TARGET === 'build') {
  module.exports = mergeConfig({
    entry: 
    {
      app: [path.join(ROOT_PATH, 'src/index.jsx')],
      //vendors: ['react']
    },
    output: {
      path: path.resolve(ROOT_PATH, 'build'),
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          // test for both js and jsx
          test: /\.jsx?$/,

          // use babel loader
          loader: 'babel',

          // operate only on our app directory
          include: path.join(ROOT_PATH, 'src'),
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
      }),
      new webpack.DefinePlugin({
        'process.env': {
          // This has effect on the react lib size
          'NODE_ENV': JSON.stringify('production'),
        }
      }),
    ],
  });
}

if(TARGET === 'dev') {
  var IP = '0.0.0.0';
  var PORT = 8080;

  module.exports = mergeConfig({
    ip: IP,
    port: PORT,
    entry: [
      'webpack-dev-server/client?http://' + IP + ':' + PORT,
      'webpack/hot/only-dev-server', // only-dev-server!
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: path.join(ROOT_PATH, 'src'),
        }
      ]
    },
    output: {
      path: __dirname,
      filename: 'bundle.js',
      publicPath: '/docs/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ]
  });
}