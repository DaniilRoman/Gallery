const path = require('path');

var BUNDLE_DIR = path.resolve(__dirname,"dist");
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var CLIENT_DIR = path.resolve(__dirname,'src/clinet');

module.exports = {
  entry: "./src/client/app/index.js",
  output: {
    path: BUNDLE_DIR, 
    filename: "bundle.js",
  },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: /node_modules/
        },
        {
          test: /\.jsx?/,
          include : APP_DIR,
          loader : 'babel-loader'
        },
      ]
    },
    devServer: {
      compress: true,
      port: 9000
    }
  };