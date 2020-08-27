const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { BaseHrefWebpackPlugin } = require("base-href-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "development",
  context: __dirname,
  target: "web",
  devtool: "source-map",
  devServer: {
    open: true,
    contentBase: "./dist",
    historyApiFallback: true,
    port: 3000
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  entry: {
    app: ["./src/index.tsx"]
  },
  output: {
    filename: "[name].js",
    chunkFilename: "js/[name].[contenthash].bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      )
    }),
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new BaseHrefWebpackPlugin({ baseHref: '/' }),
    new CopyWebpackPlugin([{ from: "./src/manifest.json" }])
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /(\.css|\.scss|\.sass)$/, use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images/',
          }
        }
      },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?prefix=font/&limit=5000&name=assets/fonts/[name].[ext]' },
      { test: /\.(woff|woff2)$/, loader: 'file-loader?prefix=font/&limit=5000&name=assets/fonts/[name].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]' },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/svgs/',
        }
      }
    ]
  },
  node: {
    console: false,
    global: true,
    process: true,
    Buffer: false,
    setImmediate: false
  }
};
