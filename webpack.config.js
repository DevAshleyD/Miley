module.exports = {
  entry: './src/js/index.jsx',
  output: {
    path: __dirname + '/miley/public/js',
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
