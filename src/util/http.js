/*
 @Author: 任雷雷 *
 @Date: 2018 - 07 - 10 16: 27: 12 *
 @LastEditors:任雷雷 *
 @LastEditTime: 2018 - 07 - 10 16: 27: 12 *
 @Description: 主入口
*/
import axios from 'axios'
import { Message } from 'element-ui'
import cookie from 'js-cookie'
// import router from '../router/index'
import qs from 'qs'
// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://basic.com' // 内网
axios.defaults.baseURL = process.env.API_HOST // 内网
// 定义计时器
let loadCount = 0
// 请求拦截器，请求前
axios.interceptors.request.use(
  config => {
    // 在请求发送之前获取cookie,并且加上定时器以及全局动画
    loadCount++
    const token = cookie.get('sedu_token')
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    }
    // 如果cookie存在就把token存再header当中
    if (token) {
      config.headers.authorization = token
      // 否则就重新进行登录
    } else {
      // router.replace({
      //   path: 'login'
      // })
      // return false
    }
    return config
  },
  err => {
    // 发送请求失败
    console.log(err) // for debug
    Promise.reject(err)
  }
)
// 应答拦截器,请求后
axios.interceptors.response.use(
  response => {
    loadCount--
    if (!loadCount) {
      return response
    }
  },
  err => {
    loadCount--
    if (!loadCount) {
      if (err && err.response) {
        err.message = 'error'
      }
      return Promise.reject(err)
    }
  }
)
/**
 * get 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, ...key) {
  let eject = testing(key)
  return new Promise((resolve, reject) => {
    axios.get(url, eject.data).then(
      response => {
        resolve(response.data)
      },
      err => {
        Message({
          showClose: true,
          message: eject.error || err.message,
          type: 'error',
          duration: 5 * 1000
        })
      }
    )
  })
}
/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}, error) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data)).then(
      response => {
        resolve(response.data)
      },
      err => {
        Message({
          message: error || err.message,
          type: 'error',
          duration: 5 * 1000
        })
      }
    )
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch (url, data = {}, error) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        Message({
          message: error || err.message,
          type: 'error',
          duration: 5 * 1000
        })
      }
    )
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put (url, data = {}, error) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        Message({
          message: error || err.message,
          type: 'error',
          duration: 5 * 1000
        })
      }
    )
  })
}

/**
 * delete 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function cut (url, data = {}, error) {
  return new Promise((resolve, reject) => {
    axios.delete(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        Message({
          message: error || err.message,
          type: 'error',
          duration: 5 * 1000
        })
      }
    )
  })
}
// 检测参数以及数据类型函数
function testing (arr) {
  let len = arr.length
  let eject = {}
  switch (len) {
    case 0:
      eject.data = {}
      eject.error = ''
      break
    case 1:
      if (isObject(arr[0])) {
        eject.data = arr[0]
        eject.error = ''
      } else {
        eject.data = {}
        eject.error = arr[0]
      }
      break
    case 2:
      eject.data = arr[0]
      eject.error = arr[1]
      break
    default:
      break
  }
  return eject
}
// 判断是否是对象的函数
function isObject (value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}
