const express = require('express');
const rootRouter = express.Router();
const authorRouter = require('./authorRouter');
const bookRouter = require('./bookRouter');

rootRouter.use('/author', authorRouter);
rootRouter.use('/book', bookRouter);
rootRouter.use('/', (req, res) =>
    res.send('Hello from root router '+JSON.stringify(req.body))
);


module.exports = rootRouter;