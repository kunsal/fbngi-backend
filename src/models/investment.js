const BaseModel = require('./base.model');

class Investment extends BaseModel{
  constructor() {
    super('investments');
  }

  
  async getTotal(customerId) {
    let text = `SELECT sum(amount) FROM ${this.table} WHERE customerId = $1`;
    return this.query(text, [customerId]);
  }

}

module.exports = Investment;  