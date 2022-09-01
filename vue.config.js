const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  //webpack devServer 提供了代理的功能，改代理可以把所有的请求到当前服务的请求，转发代理到另外的服务器上
  devServer: {
    proxy: {
      //当地中包含 /api 的时候，触发此代理
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true
      }
    }
  },
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      }).end
  }
}
