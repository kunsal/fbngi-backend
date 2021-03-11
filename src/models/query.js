const { pool } = require('../../config/database');

const ddlQuery = async (text) => {
  try {
    const res = await pool.query(text);
    logger.info(`${res.command} query ran successfully`);
  } catch (e) {
    throw new Error(e);
  }
}

const query = (queryText, params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await pool.query(queryText, params);
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = {
  ddlQuery,
  query
}