
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?tsx$/,
        loader: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      title: "Application title",
      template: 'index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  target: 'web'
}
