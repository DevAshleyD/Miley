const path = require('path')

const APP_DIR = path.resolve(__dirname + '/src/js')
const BUILD_DIR = path.resolve(__dirname + '/miley/public/js')

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'miley.js',
    publicPath: '/public/js/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|miley)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}

module.exports = config
