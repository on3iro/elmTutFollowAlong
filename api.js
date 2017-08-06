const jsonServer = require('json-server')

const server = jsonServer.create()

server.use(jsonServer.defaults())

const router = jsonServer.router('db.json')
server.use(router)

console.log('Listening at localhost:3000')
server.listen(3000)
