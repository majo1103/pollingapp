const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
  mode: "development",
  entry: SRC_DIR + "/app/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "PoolingApp",
      filename: "index.html",
      template: "src/index.html"
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: SRC_DIR,
    publicPath: "/app"
  },
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react", "es2015", "stage-2"]
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
