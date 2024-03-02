const cors = require('cors');
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('public/db.json')

// Then use it before your routes are set up:
server.use(cors());
server.use(router)

server.listen(3001, () => {
  console.log('server is running');
})
