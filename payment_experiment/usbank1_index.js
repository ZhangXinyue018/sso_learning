'use strict';

const express = require('express');
const cors = require("cors");

const PORT = 29090;

var app = express();

app.use(cors());

const success = (req, res) => {
    console.log(req);
    res.send("success");
}

app.get('/test', success);

app.get('/user', success);

app.get('/admin', success);

app.listen(PORT, function () {
    console.log(`Listening at http://localhost:${PORT}`);
});