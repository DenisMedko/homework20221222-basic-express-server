const express = require('express');
const bookRouter = express.Router();

bookRouter
    .route('/')
    .get((req, res) =>
        res.send('Hello from book router')
    );

bookRouter
    .route('/:bookId')
    .get((req, res) => {
        const { params: {bookId}} = req;
        return res.send(`Hello from book ${bookId}`);
    });

module.exports = bookRouter;
