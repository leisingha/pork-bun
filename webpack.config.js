//webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode : 'development',
    entry: './src/script.js',
    output: {
        filename: 'output.js',
        path: path.resolve(__dirname, 'dist'),
        clean : true,
    },
    devtool: "eval-source-map",
    devServer: {
    watchFiles: ["./src/template.html"],
  },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};