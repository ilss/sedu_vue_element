/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:13:20
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-06 17:13:20
 * @Description:
 */
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
