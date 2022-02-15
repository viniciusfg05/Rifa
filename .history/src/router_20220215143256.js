const express = require('express')
const routes = express.Router()

server.get('/room/shop', (req, res) => {
  const datas = [
    //Estrutura de dados jobs
    {
      id: 001,
      number: 999
    },
    {
      id: 2,
      number: 888
    },
    {
      id: 001,
      number: 999
    },
    {
      id: 001,
      number: 999
    },
    {
      id: 001,
      number: 999
    },
    {
      id: 001,
      number: 999
    }
  ]

  return res.render(__dirname + '/views/roomShop', { datas })
})
