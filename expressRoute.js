'use strict';

const express = require('express'),
    router = express.Router();
router.get('/getAuthor', require('./getAuthor'));
router.post('/addAuthor', require('./addAuthor'));

module.exports = router;
