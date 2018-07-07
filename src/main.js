/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:31
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 17:44:43
 * @Description:
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './lang'
import elementUI from 'element-ui'
import store from './vuex/store'
import mixin from './util/mixin'
import seduLanguageSwitch from 'vue-language-switch'

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.use(elementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(seduLanguageSwitch)
Vue.mixin(mixin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})
