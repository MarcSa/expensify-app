const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

module.exports =  {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
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
        historyApiFallback: true,
        publicPath:'/dist/'
    },
    mode: 'production',
    devtool: 'source-map',
}