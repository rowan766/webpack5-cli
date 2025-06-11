const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve,join } = require('path');
const port = 3003;
module.exports = {
 devServer: {
    //单页的spa应用 使用起来
    historyApiFallback: true,
    static: {
      directory: join(__dirname, '../dist'),
    },
    hot: true,
    port,
  },
 plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: './public/favicon.ico',
      template: resolve(__dirname, '../src/index-dev.html'),
    }),
 ]

}