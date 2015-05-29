const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const sassLoaders = [
  "css-loader",
  "autoprefixer-loader?browsers=last 2 version",
  "sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(__dirname, "./src"),
];

var config = {  
    target: "web",
    debug: true,
    devtool: "source-map",
    entry: {
        app: ["webpack-dev-server/client?http://localhost:8080", "./docs/index.js"]
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            { 
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    
    webpackServer: {
      noInfo: true
    },

    plugins: [
        new ExtractTextPlugin("css/style.css")
    ]
}

module.exports = config;