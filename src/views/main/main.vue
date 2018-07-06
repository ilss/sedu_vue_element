<template>
    <el-container>
        <el-header class="views-main-el-header">
            <h1 style="float:left;">{{$t('views.main.title')}}</h1>
            <!-- 语言切换 -->
            <el-dropdown trigger="click"
                         @command="handleSetLanguage"
                         class="views-main-el-header-el-dropdown">
                <div>
                    {{$t('views.main.languageSwitch')}}
                    <i>{{this.$i18n.locale==='zh'?'中文':'English'}}</i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="zh"
                                      :disabled="language==='zh'">中文</el-dropdown-item>
                    <el-dropdown-item command="en"
                                      :disabled="language==='en'">English</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </el-header>
        <el-container>
            <h1>{{ msg }}</h1>
            <h2>{{$t("components.HelloWorld.title")}}</h2>
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
        </el-container>
    </el-container>
</template>

<script>
import Cookies from 'js-cookie'
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
      msg: '',
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
  created () {
    // 载入皮肤样式
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
      //   if (this.originalStylesheetCount === document.styleSheets.length) {
      //     const style = document.createElement('style')
      //     style.setAttribute('type', 'text/css')
      //     style.setAttribute('id', 'element-ui-theme')
      //     style.innerText = cssText
      //     document.head.appendChild(style)
      //   } else {
      //     document.getElementById('element-ui-theme').innerText = cssText
      //   }
      document.getElementById('element-ui-theme').innerText = cssText
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
    },
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
