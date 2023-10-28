const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'NMS',
    themeColor: '#EAC100',
    msTileColor: '#F5F5F5',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js', // 使用 swSrc 設定相對於 src 的路徑
      swDest: 'service-worker.js', // 生成的 Service Worker 文件名稱和路徑
    },  
    iconPaths: {
      favicon32: 'public/img/icons/favicon-16x16.png',
      favicon16: 'public/img/icons/favicon-32x32.png',
      appleTouchIcon: 'public/img/icons/apple-touch-icon.png',
      maskIcon: 'public/img/icons/safari-pinned-tab.svg',
      msTileImage: 'public/img/icons/mstile-144x144.png',
    }
  },
  chainWebpack: config => {
    config.resolve.extensions
      .add('.js')
      .end(); // .end() 表示结束
  },
  devServer: {
    server: 'https',
    host: '140.123.173.4',
    // server: 'http',
    // host: '127.0.0.1',
    port: 8080,
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/NMS_pwa/' // 資料夾路徑也是儲存庫名稱
    : '/'
});
