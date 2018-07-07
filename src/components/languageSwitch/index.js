/*
 * @Author: Liang Liang
 * @Date: 2018-07-07 15:17:33
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 15:30:10
 * @Description:
 */
import LanguageSwitch from './languageSwitch'

LanguageSwitch.install = function (Vue) {
  Vue.component('SeduLanguageSwitch', LanguageSwitch)
}

export default LanguageSwitch
