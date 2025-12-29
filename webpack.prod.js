// webpack.prod.js

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: false, // usually skip source maps in prod
  output: {
    filename: "[name].[contenthash].js", // cache busting
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
});
