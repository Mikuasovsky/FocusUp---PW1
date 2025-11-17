
import { createServer, defaults, createRouter } from 'json-server'

const server = createServer()
const router = createRouter('db.json')
const middlewares = defaults()

server.use(middlewares)
server.use((req, res, next) => {
  setTimeout(next, 300)
})

server.use('/api', router)

server.listen(3001, () => {
  console.log('JSON Server rodando em http://localhost:3001')
  console.log('Dados disponíveis em http://localhost:3001/api/users, /api/subjects, etc.')
})