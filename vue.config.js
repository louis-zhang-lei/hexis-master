'use strict'
const path = require('path')

module.exports = {
  //表明配置一些webpack相关的设置
  configureWebpack: {
    //解决路径相关的问题
    resolve: {
      //配置别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'components': path.resolve(__dirname, '@/components'),
        'content': path.resolve(__dirname, '@/components/content'),
        'common': path.resolve(__dirname, '@/components/common'),
        'assets': path.resolve(__dirname, '@/assets'),
        'network': path.resolve(__dirname, '@/network'),
        'views': path.resolve(__dirname, '@/views')
      }
    }
  },
}
