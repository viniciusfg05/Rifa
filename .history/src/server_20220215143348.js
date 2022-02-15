const express = require('express')
const server = express()
const routes = require('./routes') //pegando o routes do routes.js

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  return res.render(__dirname + '/views/index')
})

server.use(express.static('public'))

server.listen(3000, () => console.log('Projeto rodando'))
