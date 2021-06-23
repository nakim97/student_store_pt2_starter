const db = require("../db")

class Store {
  static async listProducts() {
    const result = await db.query(`
      SELECT id, name, category, description, image, price
      FROM products;
    `)

    return result.rows
  }
}

module.exports = Store