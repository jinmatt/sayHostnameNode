const http = require('http');
const os = require('os');

let handleRequest = (req, res) => {
  res.writeHead(200);
  res.end(`Say my name: ${os.hostname()}`);
};

let www = http.createServer(handleRequest);
www.listen(3000);
