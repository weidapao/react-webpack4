const path = require('path')
let CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
let webpack = require('webpack')
let cssExtract = new ExtractTextWebpackPlugin({
  filename: 'css.css',
  allChunks: true
})
let sassExtract = new ExtractTextWebpackPlugin('sass.css')
let lessExtract = new ExtractTextWebpackPlugin('less.css')
const autoprefixer = require('autoprefixer')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js'
  },
  devServer: {
    contentBase: './dist',
    host: 'localhost', // 默认是localhost
    port: 3000, // 端口
    open: true, // 自动打开浏览器
    hot: true // 开启热更新
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
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'images/' // 图片打包后存放的目录
            }
          }
        ]
      },
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    htmlWebpackPlugin,
    new ExtractTextWebpackPlugin('css/style.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}
