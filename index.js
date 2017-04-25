var jumpRope= require('./jumpRope');

var http = require ('http');
http.createServer(function(req , res){
    res.writeHeader(200);
    res.write('success\n');
    res.end(JSON.stringify(jumpRope.array));
}).listen(8080);

