/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:03:38
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 09:40:50
 * @Description: 按需加载的全局函数
 */

export function currenttDate () {
  const time = new Date()
  return time.toString().match(/\b\d+:\d+:\d+\b/g)
}
