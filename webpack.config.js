const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const port = 3000;

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.[hash].js",
    publicPath: "/",
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  },
};
