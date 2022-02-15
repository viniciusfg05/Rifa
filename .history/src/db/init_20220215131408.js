const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()

    await db.exec(`CREATE TABLE profile (
      id INTERGER PRIMARY KEY AUTOINCREMENT,
      number NUMBER,
    )`)
  }
}
