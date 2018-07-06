/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:34
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-06 17:04:34
 * @Description:
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import ElementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import ElementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang
import EnLocale from './en/en'
import ZhLocale from './zh/zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...EnLocale,
    ...ElementEnLocale
  },
  zh: {
    ...ZhLocale,
    ...ElementZhLocale
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zh', // set locale
  messages // set locale messages
})

export default i18n
