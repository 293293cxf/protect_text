import * as types from './types';
import http from '../../utils/http'

const state = {
  login: {},
  authorize: false
};

const actions = {
  [types.LOGIN] (context, params) {
    http.post('ball/index/wxLogin', params).then(data => {
      context.commit(types.LOGIN, data);
    })
  }
};

const mutations = {
  [types.LOGIN] (state, data) {
    console.log('login', data);
    state.login = data;
    if (data.error) { // 登录失败
      wx.setStorageSync('sessionId', '');
      wx.showToast({
        title: data.message,
        icon: 'none',
        duration: 2000
      });
    } else {
      wx.setStorageSync('sessionId', data.data.sessionId);
      wx.reLaunch({
        url: '../../pages/index/index'
      })
    }
  },
  [types.AUTHORIZE] (state) {
    state.authorize = true
  }
};

export default {
  state, actions, mutations
}
