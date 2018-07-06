// const IsDev = false;//正式环境
const IsDev = true // 测试环境
// --------调用接口域名申明--------
const IMGHOST_PRO = '' // 图片域名
const IMGHOST_DEV = '' // HOST

/*
 * -------------以下是各种接口申明------------
*/

const IMGHOST = !IsDev ? IMGHOST_PRO : IMGHOST_DEV
// const APIHOST = !IsDev ? API_PRO : API_DEV
// elementUI css link
const ELEMENTUI_CSS_LINK = '//unpkg.com/element-ui/lib/theme-chalk/'

// --------------end--------------
export default {
  IMGHOST,
  // APIHOST,
  ELEMENTUI_CSS_LINK
}
