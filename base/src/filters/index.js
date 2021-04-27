import Vue from 'vue'

// import * as filters from './main.js'

// // 遍历所有导出的过滤器并添加到全局过滤器
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
modulesFiles.keys().forEach(modulePath => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  Vue.filter(moduleName, value.default)
})
