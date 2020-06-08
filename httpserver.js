'use strict';

const http = require('http');
const expressApp = require('./app');

module.exports = http.createServer(expressApp);


