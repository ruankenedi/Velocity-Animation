const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './index',
    // modules: './src/js/module'
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/images/favicon.png',
      hash: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: "jquery",
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    new ExtractTextPlugin("styles.css"),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'modules'
    // })
    new UglifyJSPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'js/[hash].bundle.js'
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
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: true,
              collapseWhitespace: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true 
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|mp4|mpeg|gif|ico|svg|ttf|eot|woff|woff2)$/,
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