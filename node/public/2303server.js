const http = require("http");
const fs = require("fs");

function req(request, response) {
  //   response.writeHead(200, {
  //     "content-Type": "text/plain",
  //   });
  fs.readFile("./2303callback.html", function (err, data) {
    response.writeHead(200, {
      "content-Type": "text/plain",
    });
    response.write(data);
    response.end();
  });
}

http.createServer(req).listen(5050);
console.log("Server has started in new way");
