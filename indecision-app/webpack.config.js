// entry -> output 
// https://webpack.js.org/

const path = require('path');
module.exports = {
entry : './src/app.js',
output:{
    path : path.join(__dirname, 'public'), // absolute path
    filename: 'boundle.js'
},
module: {
    rules:[{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
    }]
},
devtool: 'cheap-module-eval-source-map'

}