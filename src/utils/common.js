/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2022-11-07 13:55:29
 * @LastEditors: pujun 1176205845@qq.com
 * @LastEditTime: 2022-12-05 10:50:48
 */

import { Toast } from 'vant'

//判断是否微信浏览器
export function isWeixin() {
  let ua = window.navigator.userAgent.toLowerCase()
  // 搜狐新闻APP && ios时
  if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i) && ua.match(/(SoHu);?/i)) {
    return false
  } else {
    return !!ua.match(/(micromessenger|WeiBo|SoHu|iPod|iPad);?/i)
  }
}

export function getSystem() {
  //判断安卓还是ios
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
  return {
    //返回对象，使用可以判断对应的key(isAndroid,isIOS)是不是true
    isAndroid: isAndroid,
    isIOS: isIOS
  }
}

// 复制链接
export function copyLink(url) {
  let clipBoardContent = url || process.env.VUE_APP_LINK
  let domUrl = document.createElement('input')
  domUrl.value = clipBoardContent
  domUrl.id = 'createDom'
  document.body.appendChild(domUrl)
  domUrl.select() // 选择对象
  document.execCommand('Copy') // 执行浏览器复制命令
  let createDom = document.getElementById('createDom')
  createDom.parentNode.removeChild(createDom)
}

/**
 * @description: 拼接url参数
 * @param {Object} params 参数
 * @param {String} url 默认拼接字符
 * @return {String}
 */
export function urlSplice(params, url = '') {
  let str = url || ''
  Object.values(params).map(val => {
    str += `/${encodeURIComponent(val)}`
  })
  return str
}

//封装的提示框
export function toast(message, speed) {
  Toast.clear()
  Toast({
    message: message,
    duration: speed ? speed : 3000
  })
}

// 防抖: 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
export const debounce = (func, timeout, immediate) => {
  let timer

  return function () {
    let context = this
    let args = arguments

    if (timer) clearTimeout(timer)
    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, timeout)
      if (callNow) func.apply(context, args)
    } else {
      timer = setTimeout(function () {
        func.apply(context, args)
      }, timeout)
    }
  }
}

// 节流:触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用。
export function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1000
  }

  let _lastTime = null

  // 返回新的函数
  return function () {
    let _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments) //将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
}
