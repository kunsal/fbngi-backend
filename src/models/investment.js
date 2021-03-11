const BaseModel = require('./base.model');

class Investment extends BaseModel{
  constructor() {
    super('investments');
  }

}

module.exports = Investment;  