Mock = require('mockjs')

let userlist = require('./api/user/userList')

const data = {  // 定义mock的数据
  userlist: userlist
}

const routes = {  // 添加路由
  '/userdetail/userlist': '/userlist'
}

module.exports = {routes, data}
