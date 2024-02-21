const http = require('https');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
  console.log(`Press ctrl+c to terminate server`);
});
