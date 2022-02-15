const express = require('express')
const server = express()

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  return res.render(__dirname + '/views/index')
})

server.get('/room/shop', (req, res) => {
  const data = [
    //Estrutura de dados jobs
    {
      id: 1,
      number: 000
    },
    {
      id: 2,
      number: 001
    },
    {
      id: 3,
      number: 002
    },
    {
      id: 4,
      number: 003
    },
    {
      id: 5,
      number: 004
    }
  ]

  return res.render(__dirname + '/views/roomShop' + data)
})

server.use(express.static('public'))

server.listen(3000, () => console.log('Projeto rodando'))
