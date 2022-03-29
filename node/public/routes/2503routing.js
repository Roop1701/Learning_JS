const http = require("http");
const url = require("url");
const fs = require("fs");
//const missingValue = require("imp");

function req(request, response) {
  const base = url.parse(request.url);
  const pathname = base.pathname;
  const fileName = "." + pathname;

  console.log(fileName);

  fs.readFile(fileName, function (err, data) {
    if (err) {
      response.writeHead(404, {
        "content-type": "text/html",
      });

      return response.end("<h1>Not Found</h1>");
    }

    response.writeHead(200, {
      "content-type": "text/html",
    });
    response.writeHead(data);
    return response.end();
  });
}

http.createServer(req).listen(8080);
console.log("Server has sarted");
