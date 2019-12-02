const withCss = require('@zeit/next-css');
const withScss = require('@zeit/next-sass');
const path = require('path');

module.exports = withCss(withScss({
  // 在pages目录下那种后缀的文件会被认为是页面
  pageExtensions: ['jsx', 'js'],

  // webpack 相关配置
  webpack(config) {
    // 配置路径别名
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@component': path.resolve(__dirname, 'component'),
      '@pages': path.resolve(__dirname, 'page'),
      '@utils': path.resolve(__dirname, 'utils')
    };
    return config;
  }
}));