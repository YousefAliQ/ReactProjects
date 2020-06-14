// entry -> output 
// https://webpack.js.org/

const path = require('path');
module.exports = {
    //entry: './src/app.js',
    entry: './src/playground/redux-expensify.js',
    output: {
        path: path.join(__dirname, 'public'), // absolute path
        filename: 'boundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public') // absolute path
       
    }
}