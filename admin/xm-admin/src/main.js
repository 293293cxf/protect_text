import Vue from 'vue'
import App from './App'
import './css/app.css'
import store from './store';

Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;
import '../static/weui/weui.css'
import util from './utils/index'

util.login();
const app = new Vue({
  store,
  App
});
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      '^pages/login/login',
      'pages/index/index',
      'pages/request/request'
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '乐乐',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1AAD16',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'static/images/icon_nav_button.png',
          selectedIconPath: 'static/images/icon_nav_button.png'
        },
        {
          pagePath: 'pages/request/request',
          text: '请求',
          iconPath: 'static/images/icon_nav_cell.png',
          selectedIconPath: 'static/images/icon_nav_cell.png'
        }
      ]
    }
  }
}
