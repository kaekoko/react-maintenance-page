const path = require("path");

module.exports = {
  mode: "development",

  // default to ./src but we move to ./test to avoid import with npm library
  entry: "./test",

  output: {
    // set output path to ./dist and file name bundle.js
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // Enable sourcemaps for debugging webpack output.
  devtool: "source-map",

  devServer: {
    contentBase: __dirname, // path to let webserver serve the index.html
    compress: false,
    port: 9000,

    // webpack-dev-server is not default generate output file to disk but it's work in memory
    // when output and contentBase is difference so it will not generate output file in same path as contentBase
    writeToDisk: true
  },

  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    // Add ".js" for webpack-dev-server
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      // File loader for webpack to import images
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            jsx: true
          }
        }]
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
