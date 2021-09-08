const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

module.exports = merge(common, {
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
        },{
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    
    devServer: {
        static: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    mode: 'production',
    devtool: 'source-map',
});