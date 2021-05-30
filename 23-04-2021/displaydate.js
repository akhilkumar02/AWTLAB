var http = require('http');
var dt = require('./demomod')

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time: " + dt.myDateTime());
    res.end();
})

server.listen(8001);
console.log("Server started successfully...")