const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');

module.exports = {
  name: 'vendor',
  entry: Object.keys(pkg.dependencies),
  output: {
    path: path.resolve(__dirname, '../build/dll'),
    filename: 'vendor.bundle.js',
    library: 'vendor_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: 'vendor_[hash]',
      path: path.resolve(__dirname, '../build/dll/manifest.json')
    })
  ]
};
