const path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
  entry: "./src/client/index.html",
  output: {
    path: path.resolve(__dirname, "dist"), 
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