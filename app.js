const express = require('express');
const app = express();

const bodyParcer = express.json();
const rootRouter = require('./routes');

app.use(bodyParcer, rootRouter);

module.exports = app;
