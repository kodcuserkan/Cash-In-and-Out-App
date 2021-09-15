const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;
const input = require('./input')

console.log("Hello node!" , JSON.stringify(input))

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(input));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
