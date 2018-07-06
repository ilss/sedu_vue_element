import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './lang' // Internationalization
import store from './vuex/store'
import { mapGetters } from 'vuex'
import ElementUI from 'element-ui'
// import { getCookie, setCookie, delCookie } from './util/common' // 引入cookie方法，在组件当中使用

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.use(i18n)
Vue.use(ElementUI, {
  size: 'medium', // 设置 element-ui 默认大小
  i18n: (key, value) => i18n.t(key, value)
})
Vue.mixin({
  computed: {
    ...mapGetters([
      // 添加到全局计算属性中
      'themeColor',
      'templates',
      'language',
      'showLoading'
    ])
  },
  methods: {
    // _getLang () {
    //   return this.$store.state.language
    // },
    _templatesMu (val = 'red') {
      this.$store.state.templates = val
    },
    _getLess (filepath = '', filename = '') {
      return require(`./assets/template/${
        this.templates
      }/${filepath}/${filename}/${this.$i18n.locale}.less`)
    },
    _getImage (filepath = '', filename = '') {
      return require(`./assets/template/${
        this.templates
      }/home/img/${filepath}/${filename}`)
    }
  }
})
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
