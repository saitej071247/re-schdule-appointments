'use strict';

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressRoutes = require('./expressRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use('/',expressRoutes);
module.exports = app;
