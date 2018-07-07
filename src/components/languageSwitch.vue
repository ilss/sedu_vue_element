/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:25:04
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 13:14:23
 * @Description: 语言切换组件
 */
<template>
  <!-- 语言切换 -->
  <el-dropdown @command="handleSetLanguage"
               :class="className"
               :style="myStyle">
    <span class="el-dropdown-link">
      {{this.$i18n.messages[STORE_LANGUAGE].label}}
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown"
                      style="width:90px">
      <el-dropdown-item v-for="(item,index) of this.$i18n.messages"
                        :key="index"
                        :command="item.type"
                        :disabled="STORE_LANGUAGE===item.type">{{item.label}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      option: {
        cookies: {
          key: 'language',
          expires: 365
        }
      }
    }
  },
  props: {
    className: {
      type: String,
      default: ''
    },
    myStyle: {
      type: String,
      default: ''
    },
    my18n: {
      type: Object,
      required: true
    },
    cookies: {
      type: String,
      default: null
    },
    expires: {
      type: Number,
      default: null
    }
  },
  created () {
    if (!this.my18n) {
      console.warn('need to use vue-i18n')
      return false
    }

    if (this.cookies) {
      const cookies = {
        key: this.cookies
      }
      this.option.cookies = {
        ...this.option.cookies,
        ...cookies
      }
    }

    if (this.expires) {
      const cookies = {
        expires: this.expires
      }
      this.option.cookies = {
        ...this.option.cookies,
        ...cookies
      }
    }

    const lang = this.getSavedLanguage()
    if (lang) {
      this.$store.state.language = lang
      this.my18n.locale = lang
    }
  },
  methods: {
    getSavedLanguage () {
      return Cookies.get(this.option.cookies.key)
    },
    setSavedLanguage () {
      Cookies.set(this.option.cookies.key, this.my18n.locale, {
        expires: this.option.cookies.expires
      })
    },
    initLanguage (lang) {
      this.my18n.locale = lang
      this.$store.state.language = lang
    },
    handleSetLanguage (lang) {
      this.initLanguage(lang)
      this.setSavedLanguage()
    }
  }
}
</script>
