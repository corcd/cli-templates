import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import utils from './utils'
import api from './api'
import arms from './utils/arms'
import ViewUI from 'view-design'
import vuescroll from 'vuescroll'
import './permission'

import './assets/styles/public.less'
import 'vuescroll/dist/vuescroll.css'

arms('应用的 SID')

Vue.use(ViewUI)
Vue.use(vuescroll)

Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#222222'
  }
}

Vue.config.productionTip = false
Vue.prototype.$utils = utils
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
