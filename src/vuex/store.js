/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:13:48
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-06 17:13:48
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import state from './states'
import actions from './actions.js'

Vue.use(Vuex)
const store = new Vuex.Store({
  getters,
  state,
  actions
})
export default store
