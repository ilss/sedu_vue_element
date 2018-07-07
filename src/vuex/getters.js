/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:49
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 17:47:17
 * @Description:
 */
import state from './states'
const getters = {
  templates () {
    return state.target_template().template
  },
  themeColor () {
    return state.target_template().color
  }
}
export default getters
