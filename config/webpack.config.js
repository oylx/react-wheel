const path = require('path')

module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.join( __dirname, "./../dist"), // 打包后的文件存放的地方,包括lib
    publicPath: '/dist/',  // 设置公共路径
    filename: "./../index.js",//相对于公共路径publicPath
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
  }
}






