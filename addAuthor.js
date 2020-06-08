"use strict";

const authors =  require('./author.json').author,
 getAuthor = function(req, res) {
    const newAuthor = req.body;
    authors.push(newAuthor);
   res.send(authors);
};

module.exports = getAuthor;