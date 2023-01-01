const express = require('express');
const { handleValidationError, handleErrors } = require('./errorHandlers');

const app = express();

const bodyParcer = express.json();
const rootRouter = require('./routes');

app.use('/api', bodyParcer, rootRouter, handleValidationError, handleErrors);

module.exports = app;
