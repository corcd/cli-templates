const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias.set('assets', path.resolve('src/assets')).set('public', path.resolve(__dirname, 'public'))
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 300000,
      maxAsyncRequests: Infinity,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      cacheGroups: {
        libs: {
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk-libs',
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        },
        elementUI: {
          test: /[\\/]node_modules[\\/]view-design[\\/]/,
          name: 'chunk-viewdesign', // 单独将 view-design 拆包
          priority: 20 // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
        },
        commons: {
          name: 'chunk-commons',
          minChunks: 2, // 最小共用次数
          priority: 10
        }
      }
    })
  },
  runtimeCompiler: true,
  devServer: {
    disableHostCheck: true
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  }
}
