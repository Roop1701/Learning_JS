const http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("Welcome to Node Section_1");
  })
  .listen(8080);
