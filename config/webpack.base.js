const config = require('./webpack.cfg');

module.exports = {
  entry: {
    app: config.sourceDir
  },
  output: {
    publicPath: '/',
    path: config.buildDir,
    filename: 'static/js/[name].bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': config.appDir,
    },
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(c|le)ss$/,
        use: ['style-loader', 'css-loader', config.lessLoader],
        include: [/node_modules/, config.sourceDir]
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { limit: 8192 }
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
};
