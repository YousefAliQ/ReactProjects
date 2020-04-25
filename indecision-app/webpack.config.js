// entry -> output 
// https://webpack.js.org/

const path = require('path');
module.exports = {
entry : './src/app.js',
output:{
    path : path.join(__dirname, 'public'), // absolute path
    filename: 'boundle.js'
}

}