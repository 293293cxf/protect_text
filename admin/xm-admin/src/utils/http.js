import Fly from 'flyio/dist/npm/wx'

const request = new Fly();

request.config.baseURL = 'http://localhost:3000';

request.interceptors.request.use((request) => {
  wx.showLoading({title: '加载中..'});
  return request
});

request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading();
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideLoading();
    wx.showModal({
      title: '提示',
      content: '网络错误，请稍候再试'
    });
    return promise.resolve()
  }
);

export default request
