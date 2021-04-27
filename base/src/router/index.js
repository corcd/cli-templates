import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    redirect: '/child',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '/child',
        name: 'child',
        component: () => import('@/views/Child.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
