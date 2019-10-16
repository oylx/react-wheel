const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    example: './example.tsx',
  },
  output: {
    path: path.resolve(__dirname, './../doc'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'example.html',
      filename: 'example.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
