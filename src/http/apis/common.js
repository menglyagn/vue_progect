/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2022-09-19 10:13:13
 * @LastEditors: mqr
 * @LastEditTime: 2022-11-30 10:21:28
 */
import axios from '../https'
class Common {
  constructor() {}
  get(url, params = {}, path = {}) {
    return axios.get(url, { params, ...path })
  }
  post(url, params = {}) {
    return axios.post(url, params)
  }
  put(url, params = {}) {
    return axios.put(url, params)
  }
  patch(url, params = {}) {
    return axios.patch(url, params)
  }
  delete(url, params = {}, path = {}) {
    return axios.delete(url, { params, ...path })
  }
}

export default Common
