'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: '"https://easy-mock.com/mock/5b3c386e10a1f82172313fd6/example"' // 开发环境接口地址(这里是增加的内容)
})
