const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: resolve(__dirname, "build"),
        filename: "main.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.mp3/i,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ]
}