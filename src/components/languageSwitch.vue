/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:25:04
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-06 18:14:13
 * @Description: 语言切换组件
 */
<template>
    <!-- 语言切换 -->
    <el-dropdown @command="handleSetLanguage"
                 :class="cname"
                 :style="my_style">
        <span class="el-dropdown-link">
            {{this.language==='zh'?'简体中文':'ENGLISH'}}
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown"
                          style="width:90px">
            <el-dropdown-item command="zh"
                              :disabled="language==='zh'">简体中文</el-dropdown-item>
            <el-dropdown-item command="en"
                              :disabled="language==='en'">English</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
    }
  },
  props: {
    cname: {
      type: String,
      default: ''
    },
    my_style: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleSetLanguage (lang) {
      this.$i18n.locale = lang
      this.$store.state.language = lang
      Cookies.set('language', lang, {
        expires: 7
      }) // 创建一个从现在起7天过期的cookie，并在整个站点上有效
      this.$store.dispatch('setLanguage', lang)
    }
  }
}
</script>
