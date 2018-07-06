/* vuex基础文件 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import state from './states'
import actions from './actions.js'
Vue.use(Vuex) // 在Vue当中使用Vuex;
const store = new Vuex.Store({
  getters,
  state,
  actions
})
export default store
