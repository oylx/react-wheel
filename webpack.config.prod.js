const path = require('path')
const config = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = Object.assign({},config,{
    mode: 'production',
    externals: {
        react:{
            commonjs:'react',
            commonjs2:'react',
            amd:'react',
            root:'React'
        },
        'react-dom':{
            commonjs:'react-dom',
            commonjs2:'react-dom',
            amd:'react-dom',
            root:'ReactDOM'
        }
    }

})






