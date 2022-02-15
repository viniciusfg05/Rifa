const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

module.exports = () =>
  open({
    filename: './database.sqlite', //aquivo que os banco D. vai salvar a informações
    driver: sqlite3.Database
  })
