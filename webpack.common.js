const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');

const GasWebpackPlugin = require('gas-webpack-plugin');

const entries = WebpackWatchedGlobEntries.getEntries(['./src/js/**/*.js'], {
  ignore: './src/js/**/_*.js',
})();

module.exports = (outputFile) => ({
  entry: entries,

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `./${outputFile}.js`,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new GasWebpackPlugin(),
    new WebpackWatchedGlobEntries(),

    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      velocity: 'velocity-animate',
    }),
  ],

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@js': path.resolve(__dirname, './src/js/'),
    },
  },
});
