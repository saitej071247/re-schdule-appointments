"use strict";

const authors =  require('./author.json').author,
 getAuthor = function(req, res) {
    res.status(200);
   res.send(authors);
};

module.exports = getAuthor;