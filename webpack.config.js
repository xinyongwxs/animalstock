const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    entry: ['@babel/polyfill', './src/appRoot.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js"
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      hot: true,
      port: 8081,
      historyApiFallback: true
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 10,
        automaticNameDelimiter: '~',
        automaticNameMaxLength: 30,
        name: true,
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            filename: 'react_bundle.js',
            chunks: 'all'
          },
          antd: {
            test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/,
            filename: 'antd_bundle.js',
            chunks: 'all'
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", {
            loader: "less-loader"
          }]
        },
        {//数据
            test: [/\.json$/i],//i不区分大小写
            exclude: /(node_modules|bower_components)/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: './static/data/'//图片输出位置
                    }
                }
            ]
        },
        {
          test: /\.(gif|png|jpe?g)$/,
          loader: "file-loader"
        },
        {
          test: /\.html$/,
          loader: 'handlebars-loader'
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Animal Crossing Radish Stock'
    })]
  };
};
