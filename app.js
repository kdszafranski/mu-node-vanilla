var http = require('http');
var hello = require('./modules/hello');


http.createServer(function(req, res) {
  res.writeHead(200);
  res.write('hi');
  res.end();
}).listen(4242);

console.log('listening on port 3000');
