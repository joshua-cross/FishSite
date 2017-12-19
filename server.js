'use strict';
var http = require('http');
var fs = require('fs');

var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile('./Index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File Not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
}).listen(port);
