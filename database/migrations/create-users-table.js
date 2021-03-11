const { ddlQuery } = require('../../config/database');

const up = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS 
    users (
      id SERIAL PRIMARY KEY,
      customerName VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      password VARCHAR(255) NOT NULL,
      dob VARCHAR(10) NOT NULL,
      phone VARCHAR(20) NOT NULL UNIQUE,
      CONSTRAINT unique_email UNIQUE(email)
    )`;
  ddlQuery(queryText);
};

const down = async () => {
  const queryText = 'DROP TABLE IF EXISTS users';
  ddlQuery(queryText);
};

module.exports = {
  up,
  down,
};

require('make-runnable');
