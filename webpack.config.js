const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // Add more rules for handling other file types like CSS, images, etc.
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new webpack.ProvidePlugin({
            "React": "react",
        }),

    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        // Add more configurations if needed
    },
};