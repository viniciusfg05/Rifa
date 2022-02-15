const Database = require('../db/config')

const db = await Database()

const data = await db.get(`SELECT * FROM riffle`)

db.close()

console.log(data)

return data
