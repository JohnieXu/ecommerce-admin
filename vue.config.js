/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('src'))
      .set('_c', path.resolve('components'))
  }
}
