const commonConfig = require('./webpack.common');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        'marketing': 'marketing@http://localhost:8081/remoteEntry.js'+'?q='+Math.random()
      },
      shared: packageJson.dependencies
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ]

}

module.exports = merge(commonConfig, devConfig)