const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch (path) {
    case '':
      res.writeHead(200, {
        'content-Type': 'text/plain',
      });
      res.end('Homepage');
      break;
    case '/about':
      res.writeHead(200, {
        'content-Type': 'text/plain',
      });
      res.end('About page');
      break;
    default:
      res.writeHead(404, {
        'content-Type': 'text/plain',
      });
      res.end('404: Page not found');
      break;
  }
});

server.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
  console.log(`Press ctrl+c to terminate the server`);
});
