const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.render(__dirname + '/views/index')
})

routes.get('/room/shop', (req, res) => {
  return res.render(__dirname + '/views/roomShop')
})

module.exports = routes
