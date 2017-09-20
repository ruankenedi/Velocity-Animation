const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
// const PurifyCSSPlugin = require('purifycss-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './index'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true,
    }),
    new ExtractTextPlugin("styles.css"),
    // new PurifyCSSPlugin({
    //   // Give paths to parse for rules. These should be absolute!
    //   paths: glob.sync(path.join(__dirname, '/*.html')),
    //   minimize: true
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main'
    }),
    new UglifyJSPlugin()
  ],
  output: {
    path: path.resolve(__dirname, './dist/'),
    // publicPath: './', 
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp4|svg|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
              options: {
                name: '[hash].[ext]',
                outputPath: 'assets/',
            }  
          }
        ]
      }
    ]
  }
};