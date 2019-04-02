var fs = require('fs');
var url = require('url');
var express = require('express');
var app = express();

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = "."+q.pathname;
    fs.readFile(filename, function(err, data){
        if (err){
            res.writeHead(404, {'Content-type': 'text/html'});
            return res.end("404 not found");
        }
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(4222);