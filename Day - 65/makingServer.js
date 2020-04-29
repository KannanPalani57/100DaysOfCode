const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("Hello from NodeJS");
    res.end();
})

server.listen("4000");