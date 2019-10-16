const path = require('path')
const HtmlWebpackPlugin = require ( 'html-webpack-plugin' )


module.exports = {
  mode: 'production' ,
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.join( __dirname, "./../dist"), // 打包后的文件存放的地方,包括lib
    publicPath: '/dist/',  // 设置公共路径
    filename: "./index.js",//相对于公共路径publicPath
    library: 'FUI',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test:/\.svg$/,
        loader:'svg-sprite-loader'
      },
      {
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  externals: {
    react: {
      commonjs: 'react' ,
      commonjs2: 'react' ,
      amd: 'react' ,
      root: 'React'
    } ,
    'react-dom': {
      commonjs: 'react-dom' ,
      commonjs2: 'react-dom' ,
      amd: 'react-dom' ,
      root: 'ReactDOM'
    }
  }
}






