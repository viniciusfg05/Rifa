const express = require('express')
const routes = express.Router()
const Database = require('./db/config')
const dataNumbers = require('./model/dataNumbers')

routes.get('/', (req, res) => {
  return res.render(__dirname + '/views/index')
})

routes.get('/room/shop', (req, res) => {
  datas = [
    //Estrutura de dados jobs
    {
      id: 001,
      number: 999
    },
    {
      id: 2,
      number: 888
    }
  ]

  return res.render(
    __dirname + '/views/roomShop',
    { datas },
    dataNumbers.getData
  )
})

module.exports = routes
