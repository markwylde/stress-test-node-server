require('http').globalAgent.maxSockets = 50;
const http = require('http');

let requestNumber = 0;
function handler (request, response) {
  requestNumber = requestNumber + 1;
  if (Number.isInteger(requestNumber / 1000)) {
    console.log('INFO: Just passed', requestNumber, 'requests');
  }
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('hello');
}

http.createServer(handler).listen(8000);
