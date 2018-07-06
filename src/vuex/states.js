/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:24
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-06 20:00:58
 * @Description:  一些全局状态
 */
import Cookies from 'js-cookie'
const state = {
  target_template: 1,
  language: Cookies.get('language') || 'zh',
  skins: [
    { template: 'blue', color: 'rgb(59, 155, 233)' },
    { template: 'green', color: '#42b983' },
    { template: 'red', color: '#d44747' }
  ]
}

export default state
