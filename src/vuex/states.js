/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:24
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 17:40:25
 * @Description:  一些全局状态
 */
const state = {
  skins: [
    { template: 'blue', color: 'rgb(59, 155, 233)' },
    { template: 'green', color: '#42b983' },
    { template: 'red', color: '#d44747' }
  ],
  target_template () {
    return this.skins[1]
  }
}

export default state
