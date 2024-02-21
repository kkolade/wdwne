const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const serveStaticFile = (
  res,
  path,
  contentType = 'text/html',
  responseCode = 200
) => {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { 'content-Type': 'text/plain' });
      res.end('Internal server error');
    }

    res.writeHead(responseCode, { 'content-Type': contentType });
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch (path) {
    case '':
      serveStaticFile(res, '/public/index.html');
      break;
    case '/about':
      serveStaticFile(res, '/public/about.html');
      break;
    default:
      serveStaticFile(res, '/public/404.html', 'text/html', 404);
      break;
  }
});

server.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
  console.log(`Press ctrl+c to terminate the server`);
});
