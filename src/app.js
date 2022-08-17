require('dotenv').config();

const path = require('path');
const express = require('express');
const router = require('./Router/index');

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.static(path.join(__dirname, '..', 'public')),
);

app.use('/api', router);
module.exports = app;
