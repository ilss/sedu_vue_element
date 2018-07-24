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
  language: () => i18n.locale
}
export default getters
