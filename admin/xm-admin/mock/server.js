const jsonServer = require('json-server')
const {routes, data} = require('./routes.js')

const port = 3000

const server = jsonServer.create()
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()
const rewriter = jsonServer.rewriter(routes)

server.use(middlewares)

// 将 POST 请求转为 GET
server.use((request, res, next) => {
  request.method = 'GET'
  next()
})

server.use(rewriter)
server.use(router)

server.listen(port, () => {
  console.log(`open mock server at http://localhost:${port}`)
})
