const port = 3000;
const http = require('http');


const server = http.createServer((req, res) => {
    res.write('Hello sam')
    res.end();
})


server.listen(port)