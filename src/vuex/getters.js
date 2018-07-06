/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:49
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-06 17:29:06
 * @Description:
 */
import state from './states'
const getters = {
  templates () {
    return state.skins[state.target_template].template
  },
  themeColor () {
    return state.skins[state.target_template].color
  },
  language: state => {
    return state.language
  }
}
export default getters
