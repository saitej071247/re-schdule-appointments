"use strict";

const sinon = require('sinon'),
    test = require('tap').test,
    getAuthors = require('../getAuthor'),
    authorsInfp = require('../author.json'),
    request = {},
    res = {
        status : sinon.spy(function () {
            return this;
        }),
        send: sinon.spy(function () {
            return this;
        })
    };

test('getAuthors should fetch the author details', function(t) {
    getAuthors(request,res);
    t.assert(res.status.calledWith(200), "should return the status");
    t.assert(res.send.calledWith(authorsInfp.author), "should return the authors");
    t.end();
});
