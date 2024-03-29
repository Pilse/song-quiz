const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const port = 3000;

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/assets', to: 'assets' },
        { from: 'public/favicon', to: 'favicon' },
      ],
    }),
  ],
  devServer: {
    host: 'localhost',
    proxy: {
      '/rooms': {
        // target: 'https://song-quiz.herokuapp.com',
        target: 'http://localhost:8020',
        changeOrigin: true,
      },
    },
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  },
};
