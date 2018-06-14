module.exports = {
  /*entry: "./webpack/entry.js",
  output: {
    path: path.join(__dirname, '/resources/js'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },*/
  module: {
	rules: [
	  {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: "babel-loader",
		query: {
          presets: ["react", "env"]
        }
	  }
	]
  }
}
