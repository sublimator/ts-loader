module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts-loader', options: {
              logInfoToStdOut: true,
              logLevel: 'INFO',
          projectReferences: true
      }}
    ]
  }
}

// for test harness purposes only, you would not need this in a normal project
module.exports.resolveLoader = {alias: {'ts-loader': require('path').join(__dirname, "../../../index.js")}}
