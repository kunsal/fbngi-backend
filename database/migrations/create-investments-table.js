const { ddlQuery } = require('../../config/database');

const up = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS 
    investments (
      id SERIAL PRIMARY KEY,
      customerId INTEGER NOT NULL,
      productId VARCHAR(50) NOT NULL,
      date VARCHAR(50) NOT NULL,
      amount NUMERIC(10, 2) NOT NULL
    )`;
  ddlQuery(queryText);
};

const down = async () => {
  const queryText = 'DROP TABLE IF EXISTS investments';
  ddlQuery(queryText);
};

module.exports = {
  up,
  down,
};

require('make-runnable');
