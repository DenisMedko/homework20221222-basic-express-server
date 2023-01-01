const express = require('express');
const authorRouter = express.Router();

authorRouter
    .route('/')
    .get((req, res) =>
        res.send('Hello from author router')
    );

authorRouter
    .route('/:authorId')
    .get((req, res) => {
        const { params: {authorId}} = req;
        return res.send(`Hello from author ${authorId}`);
    });

authorRouter
    .route('/:authorId/books')
    .get((req, res) => {
        const { params: {authorId}} = req;
        return res.send(`Hello from author ${authorId} books `);
    });
    
authorRouter
    .route('/:authorId/book/:bookId')
    .get((req, res) => {
        const { params: {bookId}} = req;
        return res.redirect(`/book/${bookId}`);
    });

module.exports = authorRouter;
