var express = require('express');
var http = require('http');
var url = require('url');
var app = express();

app.get('/:etagenum/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
})
.get('/',  function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('LABASE');
})
.get('/la', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end('XD');
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});
app.listen(8080);