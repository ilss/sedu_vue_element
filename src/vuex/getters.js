/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:49
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 12:23:46
 * @Description:
 */
import state from './states'
import i18n from '@/lang'
const getters = {
  templates () {
    return state.target_template().template
  },
  themeColor () {
    return state.target_template().color
  },
  language: () => {
    return i18n.locale
  }
}
export default getters
