/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2022-09-19 10:13:13
 * @LastEditors: pujun 1176205845@qq.com
 * @LastEditTime: 2022-12-02 21:12:25
 */
import Common from './common'
import { urlSplice } from '@/utils/common'
class Active extends Common {
  constructor() {
    super()
  }
  faqAssort(params) {
    //问题类型列表
    return this.get('/message/c3/faq/assort', params)
  }
  getFaqDes(params) {
    //问题详情
    return this.get(urlSplice(params, '/message/c3/faq'))
  }
  getPubAccToken(params) {
    //获取token
    return this.post('/login/pubAcc/token', params)
  }
  getPubAccSignIn(params) {
    //签到
    return this.put('/financial/pubAcc/sign/signIn', params)
  }
}

export default new Active()
