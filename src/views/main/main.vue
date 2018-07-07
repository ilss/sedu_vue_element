/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:16
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 13:11:53
 * @Description: 项目主界面
 */
<template>
  <el-container>
    <el-header class="views-main-el-header">
      <h1>{{$t('views.main.title')}}</h1>
      <!-- 语言切换 -->
      <sedu-language-switch cname="views-main-el-header-el-dropdown"
                            :my18n="this.$i18n" />
    </el-header>

    <el-main>
      <ul>
        <li>
          <img :src="mixinGetImage('views/main/','jacket.png')"
               alt=""
               srcset=""
               width="200">
        </li>
        <li>
          <img :src="mixinGetImage('views/main/','qunzi.png')"
               alt=""
               srcset=""
               width="200">
        </li>
      </ul>
      <el-switch v-model="value3" />
    </el-main>
  </el-container>
</template>

<script>
import SeduLanguageSwitch from '@/components/languageSwitch'

export default {
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
          {
            validator: colorValidator,
            trigger: 'blur'
          }
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
    this.colors.primary = this.STORE_THEME_COLOR
    this.getIndexStyle()
    this.mixinGetLess('', `index_${this.$i18n.locale}`)
  },
  mounted () {
  },
  methods: {
    getFile (url, isBlob = false) {
      return new Promise((resolve, reject) => {
        const client = new XMLHttpRequest()
        const urlArr = client.responseURL.split('/')
        client.responseType = isBlob ? 'blob' : ''
        client.onreadystatechange = () => {
          if (client.readyState !== 4) {
            return
          }
          if (client.status === 200) {
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
      this.getFile('//unpkg.com/element-ui/lib/theme-chalk/index.css')
        .then(({ data }) => {
          this.originalStyle = this.getStyleTemplate(data)
          this.writeNewStyle()
        })
    }

  }
}
</script>
