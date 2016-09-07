const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: './front/js/main.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.sass']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'postcss-loader', 'sass']
      },
      { test: /\.slim$/, loaders: ['slm'] }
    ]
  },
  postcss: function () {
    return [autoprefixer]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
