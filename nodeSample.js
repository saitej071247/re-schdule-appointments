const express= require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.get('/', function(req,res) {
    res.send('hello welcome to my new world');    
})
app.listen(3002, function(req,res) {
    console.log("Hello I am on running on port 3002");
});