const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const URL_LOADER = require('url-loader');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // load in revers order
                    MiniCssExtractPlugin.loader /*3. Extract css into files*/,
                    "css-loader" /*2. Take your css and turn it into JS*/,
                    "sass-loader" /*1. Turns sass into css*/,
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            // https://webpack.js.org/loaders/html-loader/#esmodule
                            // By default, html-loader generates JS modules that
                            // use the ES modules syntax. There are some cases in which using ES modules is beneficial,
                            // like in the case of module concatenation and tree shaking.
                            esModule: false,
                        },
                    },
                ],
            },
            {
              test: /\.(gif|png|jpe?g|svg|webp)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
                    name: '[name].[hash:8].[ext]',
                    outputPath: 'img'
                  },
                },
                {
                  loader: 'image-webpack-loader',
                  options: {
                    mozjpeg: {
                      progressive: true,
                      quality: 65
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                      enabled: false,
                    },
                    pngquant: {
                      quality: [0.65, 0.90],
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                      quality: 75
                    }
                  }
                },
              ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    useBuiltIns: "usage",
                                    corejs: "3.22",
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
        new CssMinimizerPlugin(),
        new TerserPlugin(),
    ],
};
