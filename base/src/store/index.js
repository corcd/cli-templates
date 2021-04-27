import vue from 'vue'
import vuex from 'vuex'
// import createLogger from 'vuex/dist/logger' // 修改日志

vue.use(vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((files, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  files[moduleName] = value.default
  return files
}, {})

export default new vuex.Store({
  modules,
  plugins: process.env.NODE_ENV !== 'production' ? [] : [] // 开发环境下显示vuex的状态修改 createLogger()
})
