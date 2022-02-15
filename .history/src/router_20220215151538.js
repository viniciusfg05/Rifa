const express = require('express')
const routes = express.Router()
const Database = require('./db/config')

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

module.exports = routes

(module.exports = {
  async get() {
    const db = await Database()

    const data = await db.get(`SELECT * FROM riffle`)

    db.close()

    console.log(data)
  }
})
)