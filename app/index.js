'use strict';

const express = require('express');
const cors = require("cors");

const PORT = process.env.PORT || 9090;

var app = express();

app.use(cors());

const success = (req, res) => {
    console.log(req.headers);
    res.send("success");
}

const tempLogger = (indicator) => {
    return (req, res, next) => {
        console.log(indicator);
        next();
    }
}

app.get('/test', tempLogger("test"), success);

app.get('/user', tempLogger("user"), success);

app.get('/admin', tempLogger("admin"), success);

app.listen(PORT, function () {
    console.log(`Listening at http://localhost:${PORT}`);
});