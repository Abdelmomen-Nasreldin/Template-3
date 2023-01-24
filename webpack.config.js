const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanPlugin = require('clean-webpack-plugin');
const loader = require('sass-loader');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    module: {
        rules: [
            {
                test: "/\.s[ac]ss$/i",
                include: [path.resolve(__dirname, 'src', 'scss')],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            import: true,
                            importLoaders: 1,
                            modules: true,
                        }
                    },

                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            webpackImporter: true,
                            import: true,
                            sassOptions: {
                                fiber: false,
                            },
                        },
                    },
                ],
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
            , {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            filename: "index.html",
            template: "./index.html"
        }),
        new MiniCssExtractPlugin(),
    ],

};