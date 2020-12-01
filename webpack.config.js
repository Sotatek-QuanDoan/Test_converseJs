var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js'
  },
  devServer: {
    port: 3333,
    publicPath: '/build'
  },
  plugins: [new HtmlWebpackPlugin()],
};