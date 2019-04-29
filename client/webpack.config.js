const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'true'))
});

const stylesheetsLoaders = [
  {
    loader: 'style-loader'
  }, {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[path]-[local]-[hash:base64:3]',
      sourceMap: true
    }
  }
];

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    filename: '[hash].js',
    path: __dirname + '/dist'
  },
  devtool: 'source-map',
  plugins: [
    htmlWebpackPlugin, definePlugin
  ],
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.css$/,
        use: [...stylesheetsLoaders, {
          loader:'css-loader',
          options: {
            indentedSyntax: 'css',
            sourceMap: true,
            emitWarning: false
          }

        }
      ]
      }, {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      }, {
        test: /\.sass$/,
        use: [
          ...stylesheetsLoaders, {
            loader: 'sass-loader',
            options: {
              indentedSyntax: 'sass',
              sourceMap: true,
              emitWarning: false
            }
          }
        ]
      }, {
        test: /\.less$/,
        use: [
          ...stylesheetsLoaders, {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }, {
        test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api*': 'http://localhost:5000'
    }
  }
};
