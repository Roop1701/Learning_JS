const http = require("http");
// const fs = require("fs");
const url = require("url");

function req(request, response) {
  const base = url.parse(request.url);
  const pathname = base.pathname;
  console.log(pathname + "received");
  response.writeHead(200, {
    "content-type": "text/html",
  });
  response.write("WELCOME TO URL MODULE");
  response.end();
}

http.createServer(req).listen(7070);
console.log("Server with the logic of the URL");
