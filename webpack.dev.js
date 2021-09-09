const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
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
}