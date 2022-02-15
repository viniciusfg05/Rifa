module.exports = {
  Data() {
    ;[
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
  },
  async get() {
    const db = await Database()

    const data = await db.get(`SELECT * FROM riffle`)

    db.close()

    console.log(data)

    return data
  }
}
