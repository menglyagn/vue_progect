/*
 * @Author: 15248916615 1176205845@qq.com
 * @Date: 2025-02-27 14:32:33
 * @LastEditors: 15248916615 1176205845@qq.com
 * @LastEditTime: 2025-02-27 14:39:56
 * @FilePath: \wisdom_power_retention_h5\src\http\https.js
 * @Description: 
 * 
 */
import axios from 'axios'
import { Toast } from 'vant'
import { debounce } from '@/utils/common'

const BASERESTURL = process.env.VUE_APP_BASE_API
// const BASERESTURL = process.env.NODE_ENV === 'develop' ? '' : process.env.VUE_APP_BASE_API
export const baseRestUrl = BASERESTURL.replace(/http[s]*\:/gim, location.protocol)

let errorMsgObj = {}
function toastMsg(speed) {
  Object.keys(errorMsgObj).map(item => {
    Toast({
      message: item,
      duration: speed ? speed : 3000
    })
    delete errorMsgObj[item]
  })
}

// 是否未预发布和生产环境
let pro = ['release', 'production'].includes(process.env.NODE_ENV)

let request = axios.create({
  // baseURL: baseRestUrl,
  baseURL: pro ? baseRestUrl : baseRestUrl + '/api',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
// 请求拦截器
request.interceptors.request.use(
  async config => {
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const headerKeys = {
      Authorization: localStorage.getItem('token') || '',
    }
    Object.assign(config.headers, headerKeys)
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response.data.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    console.log('response:', error.response)
    if (error.response) {
      const url = error.response?.config?.url
      const { data } = error.response
      // const resCode = data.code
      const resMsg = data.msg || '服务器异常，请稍后再试'
      errorMsgObj = {}
      if (!errorMsgObj[resMsg]) {
        errorMsgObj[resMsg] = resMsg
      }
      // 其他错误，直接抛出错误提示
      setTimeout(debounce(toastMsg, 800))

      return Promise.reject(data)
    } else {
      console.log('!error-response:', error)
      if (error?.message?.includes('timeout')) {
        Toast('网络异常，请稍后再试') // 判断请求异常信息中是否含有超时timeout字符串
        return Promise.reject('timeout') // reject这个错误信息
      }
    }
  }
)

export default request
