var webpack = require('webpack');
var path    = require('path');

module.exports = {
  output: {
    filename: "main.js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  externals: {
    // require("jquery") is external and available
    // on the global var jQuery
    "jquery": "jQuery"
  }
}
