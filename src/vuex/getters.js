/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:49
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 17:47:17
 * @Description:
 */
import i18n from '@/lang'
const getters = {
  templates: () => process.env.THEME_FOLDER,
  language: () => i18n.locale,
  themeColor: state => {
    let color = null
    state.skins.map(key => {
      if (process.env.THEME_FOLDER.includes(key.template)) {
        color = key.color
      }
    })
    return color
  }
}
export default getters
