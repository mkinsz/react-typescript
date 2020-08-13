const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const config = require('./webpack.cfg');
const common = require('./webpack.base');

module.exports = merge(common, {
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  mode: 'development',
  output: {
		pathinfo: true
	},
  devServer: {
    publicPath: '/',
    contentBase: config.sourceDir,
    compress: true,
    open: false,
    host: '0.0.0.0',
    port: 9528,
    hot: true,
    https: false,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
    quiet: false,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  stats: {
    children: false
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 在控制台中输出可读的模块名
    new webpack.HotModuleReplacementPlugin(), //模块热替换
    new webpack.NoEmitOnErrorsPlugin(), // 避免发出包含错误的模块
    new webpack.DefinePlugin({  PRODUCTION: JSON.stringify(false) }),
    new HtmlWebpackPlugin({
      title: 'React Typescript',
      removeComments: true, // 移除HTML中的注释
      collapseWhitespace: true, // 删除空白符与换行符
      minifyCSS: true, // 压缩内联css
      inject: true,
      favicon: config.assetsDir + '/favicon.ico',
      template: config.publicDir + '/index.html'
    }),
    // 如果需要启动 DLL 编译，则使用该插件
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, '../build/dll/manifest.json')
    // })
  ],
});
