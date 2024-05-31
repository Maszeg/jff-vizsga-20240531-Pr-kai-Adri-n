const http = require('http');

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain'); 
});

server.listen(port, hostname, () => { 
   
});
