const http = require("http");
const url = require("url");
const fs = require("fs");
function req(request, response) {
  const base = url.parse(request.url);
  const pathname = base.pathname;
  const fileName = "." + pathname;
  console.log(fileName);
  response.writeHead(200, {
    "content-type": "text/html",
  });
  response.write("Welcome");
  response.end();
}

http.createServer(req).listen(8080);
console.log("Welcome to new experience");
