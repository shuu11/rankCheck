const ESLintPlugin = require('eslint-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const outputFile = '[name].[chunkhash]';

module.exports = () => merge(common(outputFile), {
  mode: 'production',

  plugins: [
    new ESLintPlugin({
      fix: true,
    }),
  ],
});