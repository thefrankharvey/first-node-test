// var http = require('http');
// var server = http.createServer();

// server.on('request', function(req, res) {
    // console.log('response', res)
//      res.writeHead(200, 
//     {"Content-Type":
//         "text/plain"});
//      res.end("This is our response!");
// })

// server.listen(3000);
// console.log('server running on port 3000')





var http = require('http');

var server = http.createServer(function(req, res) {
    res.end("Hello World");
});
server.listen(3000);
