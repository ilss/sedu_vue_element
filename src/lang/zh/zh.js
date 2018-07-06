import main from './views/main'
import helloWorld from './components/helloWorld'

export default {
  // 皮肤
  skin: {
    blue: '天空蓝',
    green: '典雅绿',
    red: '樱桃红',
    purple: '贵族紫',
    default: '默认'
  },
  // 路由
  views: {
    ...main
  },
  components: {
    ...helloWorld
  }
}
