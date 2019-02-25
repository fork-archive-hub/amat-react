const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  // use devMode unless mode is set to production
  const devMode = argv.mode !== "production" ? true : false;

  return {
    entry: [
      "core-js/modules/es6.promise",
      "core-js/modules/es6.array.iterator",
      path.resolve(__dirname, "./src/index.js")
    ],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      library: ["AmatReact"],
      libraryTarget: "umd",
      publicPath: "/dist/"
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
    // output: {
    //   path: __dirname + '/dist',
    //   publicPath: '/',
    //   filename: 'bundle.js'
    // }
    //   devServer: {
    //     contentBase: './dist',
    //     port: 3005
    //   }
  };
};
