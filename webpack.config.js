const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanCSSPlugin = require("less-plugin-clean-css");

module.exports = {
  entry: "./app/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        loader: "ts-loader"
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: 'camelCase',
              camelCase: true
            }
          }, {
            loader: 'less-loader',
            options: {
              plugins: [ new CleanCSSPlugin({ advanced: true }) ]
            }
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
    })
]
};