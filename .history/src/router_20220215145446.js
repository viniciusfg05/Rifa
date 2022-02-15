const express = require('express')
const routes = express.Router()
const datas = require('./model/dataNumbers')

routes.get('/', (req, res) => {
  return res.render(__dirname + '/views/index')
})

routes.get('/room/shop', (req, res) => {
  return res.render(__dirname + '/views/roomShop', datas.Data)
})

module.exports = routes
