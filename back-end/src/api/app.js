const express = require('express');
const adocaoRouter = require('../database/routes/adocaoRouter');
const petsRouter = require('../database/routes/petsRouter');

const app = express();

const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(accessControl);
app.use(express.json());
app.use('/adocoes', adocaoRouter);
app.use('/pets', petsRouter);

module.exports = app;
