const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')


module.exports = merge(common, {
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    
    devServer: {
        static: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: './dist',
    },
});