import router from '@/router'
import store from '@/store'
import ViewUI from 'view-design'

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  ViewUI.LoadingBar.start()
  console.log(to.path)
  if (to.path !== '/') store.dispatch('info/setUserInfo').then(() => next())
  else next()
})

router.afterEach(route => {
  ViewUI.LoadingBar.finish()
})
