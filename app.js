const express = require('express');
const app = express();
app.use(express.json());
app.get('*', function (req, res) {
    res.send('hello world '+JSON.stringify(req.body));
});


module.exports = app;