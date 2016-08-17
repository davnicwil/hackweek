const webpack = require('webpack');

module.exports = {
  entry: './src/js/client/client.js',
  output: {
    path: './build',
    filename: `app.js`
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'stage-0',
            'react'
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  watch: true,
  devtool: 'sourcemap',
  debug: true
};
