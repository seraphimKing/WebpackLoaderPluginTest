const path = require('path');
const MyExampleWebpackPlugin = require('./plugins/MyExampleWebpackPlugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /.json/,
      //   use: path.resolve('./loaders/FormatJsonLoader.js')
      // }
    ]
  },
  plugins: [
    new MyExampleWebpackPlugin(() => {
      console.log('success webpack build')
    }, (err) => {
      console.log('error webpack build')
    })
  ]
}