const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { merge } = require('webpack-merge');

const config = require('./webpack.cfg');
const common = require('./webpack.base');

console.log('Env: ', process.env.NODE_ENV)

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendors',
          enforce: true,
          chunks: 'initial'
        },
        // 将所有的样式文件打包到单个项目
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          reduceIdents: false,
          autoprefixer: false
        }
      })],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        exclude: /antdTheme/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          config.lessLoader
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Typescript',
      removeComments: true, // 移除HTML中的注释
      collapseWhitespace: true, // 删除空白符与换行符
      minifyCSS: true, // 压缩内联css
      inject: true,
      template: config.publicDir + '/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[id].css',
      ignoreOrder: true,
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: config.assetsDir,
        to: config.buildDir + '/static',
        globOptions: {
          ignore: ['.*']
        }
      }]
    })
  ]
});
