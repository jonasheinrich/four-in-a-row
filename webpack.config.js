module.exports = {
  entry: {
    app: './app',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFileName: '[id].js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.css$/, loader: "style!css"
      }
    ]
  }
};
