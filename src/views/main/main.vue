/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:16
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-06 18:13:55
 * @Description:
 */
<template>
  <el-container>
    <el-header class="views-main-el-header">
      <h1 style="float:left;">{{$t('views.main.title')}}</h1>
      <!-- 语言切换 -->
      <sedu-language-switch cname="views-main-el-header-el-dropdown">
      </sedu-language-switch>
    </el-header>

    <el-main>
      <ul>
        <li><img :src="_getImage('views/main/','jacket.png')"
               alt=""
               srcset=""
               width="200"></li>
        <li><img :src="_getImage('views/main/','qunzi.png')"
               alt=""
               srcset=""
               width="200"></li>
      </ul>
      <el-switch v-model="value3">
      </el-switch>
      <img src=""
           alt=""
           srcset="">
      <ul>
        <li>
          <a href="https://vuejs.org"
             target="_blank">
            Core Docs
          </a>
        </li>
        <li>
          <a href="https://forum.vuejs.org"
             target="_blank">
            Forum
          </a>
        </li>
        <li>
          <a href="https://chat.vuejs.org"
             target="_blank">
            Community Chat
          </a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs"
             target="_blank">
            Twitter
          </a>
        </li>
        <br>
        <li>
          <a href="http://vuejs-templates.github.io/webpack/"
             target="_blank">
            Docs for This Template
          </a>
        </li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/"
             target="_blank">
            vue-router
          </a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/"
             target="_blank">
            vuex
          </a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/"
             target="_blank">
            vue-loader
          </a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue"
             target="_blank">
            awesome-vue
          </a>
        </li>
      </ul>
    </el-main>
  </el-container>
</template>

<script>
import SeduLanguageSwitch from '@/components/languageSwitch'
import Api from '@/util/api'

export default {
  name: 'Main',
  data () {
    const colorValidator = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(this.langConfig.validate.required[this.lang]))
      } else if (!/^#[\dabcdef]{6}$/i.test(value)) {
        return callback(new Error(this.langConfig.validate.format[this.lang]))
      } else {
        callback()
      }
    }
    return {
      value3: true,
      colors: {
        primary: '#1f4665'
      },
      rules: {
        primary: [
          { validator: colorValidator, trigger: 'blur' }
        ]
      },
      originalStyle: '',
      styleFiles: []
    }
  },
  components: {
    SeduLanguageSwitch
  },
  created () {
    // 载入皮肤样式
    this.colors.primary = this.themeColor
    this.getIndexStyle()
    require(`../../assets/template/${this.templates}/index_${this.$i18n.locale}.less`)
  },
  mounted () {
  },
  methods: {
    getFile (url, isBlob = false) {
      return new Promise((resolve, reject) => {
        const client = new XMLHttpRequest()
        client.responseType = isBlob ? 'blob' : ''
        client.onreadystatechange = () => {
          if (client.readyState !== 4) {
            return
          }
          if (client.status === 200) {
            const urlArr = client.responseURL.split('/')
            resolve({
              data: client.response,
              url: urlArr[urlArr.length - 1]
            })
          } else {
            reject(new Error(client.statusText))
          }
        }
        client.open('GET', url)
        client.send()
      })
    },

    writeNewStyle () {
      let cssText = this.originalStyle
      Object.keys(this.colors).forEach(key => {
        cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + this.colors[key])
      })
      document.querySelector('#element-ui-theme').innerText = cssText
    },

    getStyleTemplate (data) {
      const colorMap = {
        '#3a8ee6': 'shade-1',
        '#409eff': 'primary',
        '#53a8ff': 'light-1',
        '#66b1ff': 'light-2',
        '#79bbff': 'light-3',
        '#8cc5ff': 'light-4',
        '#a0cfff': 'light-5',
        '#b3d8ff': 'light-6',
        '#c6e2ff': 'light-7',
        '#d9ecff': 'light-8',
        '#ecf5ff': 'light-9'
      }
      Object.keys(colorMap).forEach(key => {
        const value = colorMap[key]
        data = data.replace(new RegExp(key, 'ig'), value)
      })
      return data
    },

    getIndexStyle () {
      this.getFile(`${Api.ELEMENTUI_CSS_LINK}index.css`)
        .then(({ data }) => {
          this.originalStyle = this.getStyleTemplate(data)
          this.writeNewStyle()
        })
    }

  }
}
</script>
