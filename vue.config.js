const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  /*baseUrl: process.env.VUE_APP_BUILD_ROOT,
  assetsDir: 'static/',*/
  devServer: {
    /*proxy: {
      '/api': {
        target: 'http://47.97.122.61:8888',
        // target: 'http://wx.ltms.keking.cn/server',
        // target: 'http://192.168.180.111:8081',
        // target: 'http://dltms.keking.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }*/
  },
  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,
  chainWebpack: (config) => {
    config
      .entry('index')
      .add('babel-polyfill')
  }
}
