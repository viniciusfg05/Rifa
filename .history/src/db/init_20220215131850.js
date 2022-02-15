const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()

    await db.exec(`CREATE TABLE riffle (
      id INTERGER PRIMARY KEY AUTOINCREMENT,
      number NUMBER,
    )`)

    await db.run(`INSERT INTO riffle (number) VALUES (222)`)
  }
}
