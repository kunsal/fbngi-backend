const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const routes = require('./routes/index');
// Routes import
// const auth = require('./routes/auth');

const app = express();

app.use((req, res, next) => {
  console.log(req.body);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// For testing purpose
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/download', (req, res) => {
  res.send('Downloaded')
});

app.use(routes);
module.exports = app;
