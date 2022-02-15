const express = require('express')
const server = express()
const expressLayouts = require('express-ejs-layouts')

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  return res.render(__dirname + '/views/index')
})

server.get('/room/shop', (req, res) => {
  const datas = [
    //Estrutura de dados jobs
    {
      id: 1,
      number: 999
    },
    {
      id: 2,
      number: 888
    }
  ]

  return res.render(__dirname + '/views/roomShop', { datas })
})

server.use(express.static('public'))

server.listen(3000, () => console.log('Projeto rodando'))
