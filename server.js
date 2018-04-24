const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = process.env.PORT || 3000

const server = express()

server.disable('x-powered-by')

if (process.env.NODE_ENV !== 'test') server.use(morgan('dev'))
server.use(bodyParser.json())

const costumeRoutes = require('./src/routes/costumes')
server.use('/costumes', costumeRoutes)

server.use((err, req, res, next) => {
  console.error('err.stack = ', err.stack) // Log the stacktrace of any errors that happen
  const status = err.status || 500
  res.status(status).json({ error: err })
})

server.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' } })
})

const listener = () => console.log(`Listening on port ${port}`)
server.listen(port, listener)

module.export = server;