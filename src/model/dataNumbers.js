const Database = require('../db/config')

module.exports = {
  async datas() {
    const db = await Database()

    const data = await db.get('SELECT * FROM riffle')

    await db.close()

    console.log(data)
    return data
  }
}
