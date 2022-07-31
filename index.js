const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('home.html', (err, data) => {
            if (err) throw err
            console.log('trying')
            console.log(data)
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.write(data)
          });
    }
    else if (req.url === '/about') {
        fs.readFile(__dirname + '/about.html', (err, data) => {
            if (err) throw err
            console.log('trying')
            console.log(data)
            res.writeHead(200, { 'Content-Type': 'text/plain'});
            res.write(data)
          });
    }
    else if (req.url === '/contact') {
        fs.readFile('contact.html', (err, data) => {
            if (err) throw err
            console.log('trying')
            console.log(data)
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.write(data)
          });
    }
    else {
        res.write('<h1>Error!! 404 Not Found</h1>');
    }
    res.end();
});

server.listen(3000);
console.log(`The HTTP Server is running on port 3000`);