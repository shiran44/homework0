var jumpRope= require('./jumpRope');
var express = require('express');
var app = express();

var http = require ('http');
app.get('/', function(req, res){
    res.status(200);
    res.json(jumpRope.array);
    res.end();
});

http.createServer(app).listen(8080);

