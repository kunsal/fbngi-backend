// const { query } = require('./query');
const { query } = require('../../config/database');

class BaseModel {
  /**
   * 
   * @param {string} table 
   */
  constructor(table) {
    this.table = table;
    this.query = query;
  }

  /**
   * Get record(s by field
   * @param {string} field 
   * @param {string} value 
   * @param {boolean} single 
   */
  async findBy(field, value, single = false) {
    let text = `SELECT * FROM ${this.table} WHERE ${field} = $1`;
    if (single) {
      text += ' LIMIT 1';
    } 
  
    let values = [ value ];
    return this.query(text, values);
  }

  /**
   * Create a new model record
   * @param {object} data 
   */
  async create(data) {
    const fields = Object.keys(data).toString();
    const values = Object.values(data);
    const parameters = this.parameterize(values);
    const text = `INSERT INTO ${this.table} (${fields}) VALUES (${parameters}) RETURNING *`;
    return this.query(text, values); 
  }

  /**
   * Check if value of a field already exists 
   * @param {string} field 
   * @param {string} value  
   * @returns {boolean}
   */
  async exists(field, value) {
    const param = await this.findBy(field, value, true);
    // Check if user returns count
    if (param.rowCount > 0) {
      return true;
    }
    return false;
  }

  /**
   * Parameterize this.query values
   * @param {array} data 
   * @returns {string} 
   */
  parameterize(data) {
    let count = 1;
    let parameters = [];
    data.map(d => {
      parameters.push(`$${count}`)
      count ++;
    });
    return parameters.toString();
  }
}

module.exports = BaseModel;