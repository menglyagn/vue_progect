import axios from 'axios'
import store from '../store'

// 配置项
const service = axios.create({
    baseURL: 'http://xxxxx.com/api',        // 接口地址
    timeout: 5000,                                     // 请求超时
})

// 请求拦截器
service.interceptors.request.use((config: any) => {
    config.headers.Token = store.state.token
    return config
}, err => {
    return Promise.reject(err)
})
// 响应拦截器
service.interceptors.response.use((res: any) => {
    if(res.data.code === 200) {
        return res.data
    }else{
        throw new Error(`${res.data.code} - ${res.data.msg}`)
    }
}, function(err) {
    return Promise.reject(err)
})

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url: string, params: any){
    return new Promise((response, reject) => {
        service({url, method: 'get', params}).then(res => {
            response(res)
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * 封装post方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url: string, data = {}){
    return new Promise((response, reject) => {
        service({url, method: 'post', data}).then(res => {
            response(res)
        }).catch(err => {
            reject(err)
        })
    })
}