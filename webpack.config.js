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
            test: /\.css$/,
            loader: 'style!css?importLoaders=1&url=false!postcss'
        },
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
