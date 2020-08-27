const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const autoprefixer = require("autoprefixer");

module.exports = {
    mode: 'production',
    context: __dirname,
    target: 'web',
    devtool: false,
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    entry: {
        app: ["../src/index.tsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            "template": "../src/index.html",
            "filename": "./index.html"
        }),
        new CopyWebpackPlugin([
            { from: '../src/manifest.json' }
        ]),
        new CaseSensitivePathsPlugin(),
        new Dotenv()
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
