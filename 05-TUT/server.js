const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello, World!\n am here ");
});
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
