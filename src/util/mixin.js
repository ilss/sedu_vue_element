/*
 * @Author: Liang Liang
 * @Date: 2018-07-07 08:24:26
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 17:01:32
 * @Description: 使用频率非常高的全局函数
 */
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      // 添加到全局计算属性中
      STORE_THEME_COLOR: 'themeColor',
      STORE_TEMPLATES: 'templates'
    })
  },
  methods: {
    mixinGetLess (filepath = '', filename) {
      return require(`../assets/template/${
        this.STORE_TEMPLATES
      }/${filepath}${filename}.less`)
    },
    mixinGetImage (filepath = '', filename = 'noimg.gif') {
      return require(`../assets/template/${
        this.STORE_TEMPLATES
      }/${filepath}${filename}`)
    }
  }
}
