const BaseModel = require('./base.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class User extends BaseModel{
  constructor() {
    super('users');
  }

  /**
   * Generate hash from string
   * @param {string} str 
   * @returns {string} hashed
   */
  async hash(str) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(str, salt);
      return hashed;
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
   * Compare passwords
   * @param {string} password 
   * @param {string} hashedPassword
   * @returns {boolean} 
   */
  async verify(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }

  generateAuthToken(user) {
    const token = jwt.sign(
      { 
        userId: user.id, isAdmin: user.isadmin, email: user.email 
      }, 
      process.env.JWT_PRIVATE_KEY, 
      {
        expiresIn: '6h'
      });
    return token;
  }
}

module.exports = User;  