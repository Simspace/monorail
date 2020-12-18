const path = require('path')
const webpack = require('webpack')

module.exports = function() {
  const defaultBabelConfig = require(path.join(
    __dirname,
    '../../../../../babel.config',
  )).defaultBabelConfig

  return {
    name: 'my-cool-plugin-that-lets-me-add-aliases',
    configureWebpack(_config, _isServer, _utils) {
      return {
        resolve: {
          alias: {
            src: path.join(__dirname, '../../../../portal-client/', 'src'),
            '@monorail': path.resolve(__dirname, '../../../', 'src'),
          },
        },
        mergeStrategy: { 'module.rules': 'append' },
        plugins: [
          new webpack.DefinePlugin({
            __CUSTOMER_VARIANT__: JSON.stringify(null),
          }),
        ],
        module: {
          rules: [
            {
              test: /\.(ts|tsx|js|jsx)$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  // Brings in all the plugins from src
                  plugins: [...defaultBabelConfig.plugins],
                  presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                    '@babel/preset-typescript',
                  ],
                },
              },
            },
          ],
        },
        plugins: [
          new webpack.DefinePlugin({
            __CUSTOMER_VARIANT__: JSON.stringify('SimSpace'),
          }),
        ],
      }
    },
  }
}
