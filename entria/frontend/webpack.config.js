var path = require('path')
module.exports = {
  devtool: 'source-map',
  entry: {
    js: "./src/index.js"
  },
  output: {
    filename: "dist/bundle.js"
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, "src"),
        use: {
          loader: "babel-loader",
  //        options: "cacheDirectory=.babel_cache"
        }
      }
    ]
  }
}