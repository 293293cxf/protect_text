import store from '../store';
import {AUTHORIZE} from '../store/user/types'
import http from '../utils/http'

export default {
  login () {
    let sessionId = wx.getStorageSync('sessionId');
    if (sessionId) {
      // 如果本地有sessionId，请求服务器，是否也存在该sessionId
      wx.checkSession({
        success: function () {
          http.request('ball/index/checkSessionId', {
            'sessionId': sessionId
          }).then(data => {
            if (data.data.error) {
              console.log('后台返回: ', data.data.message);
              this.jumpLogin()
            } else {
              console.log('授权已存在,改变state');
              store.commit(AUTHORIZE)
            }
          })
        },
        fail: function () {
          console.log('授权过期');
          this.jumpLogin()
        }
      })
    } else {
      console.log('未授权,跳转登录页面');
      this.jumpLogin()
    }
  },
  jumpLogin () {
    wx.reLaunch({
      url: '/pages/login/login'
    })
  }
}

