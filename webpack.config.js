const path = require("path");

const OPTIMIZE = process.env.OPTIMIZE ? JSON.parse(process.env.OPTIMIZE) : false;

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanCSSPlugin = require("less-plugin-clean-css");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [];
const lessPlugins = [];

plugins.push(new ExtractTextPlugin({
  filename: 'css/[name].css',
  allChunks: true
}));

if (OPTIMIZE) {

  plugins.push(
    new UglifyJSPlugin({
      compress: true,
      sourceMap: true,
    })
  );

  lessPlugins.push(
    new CleanCSSPlugin()
  );
}

module.exports = {
  entry: "./app/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(ts|tsx)?$/,
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
              plugins: lessPlugins
            }
          }]
        })
      }
    ]
  },
  plugins: plugins,
  devtool: OPTIMIZE? "" : "source-map" ,
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'app/components/'),
      store: path.resolve(__dirname, 'app/store/'),
      views: path.resolve(__dirname, 'app/views/'),
      api: path.resolve(__dirname, 'app/api/'),
    },
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};