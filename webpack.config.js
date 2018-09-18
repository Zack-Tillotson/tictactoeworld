const path = require('path');

const config = {
  mode: 'development',
  stats: 'verbose',
  entry: {
    app: './src/client',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
        },
      }],
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader",
      }],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  serve: {
    content: './dist',
    port: 8888,
  },
};

module.exports = config;