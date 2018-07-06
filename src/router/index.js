import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main/main'

Vue.use(Router)
export default new Router({
  linkActiveClass: 'active-link',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
