const port = 3000;
const http = require('http');
const hostName = '127.0.0.1'


const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome to Sibasi')
    } else {
        res.end(
            `
      <h1>Oops page not found</h1>
      <p>Unfortunately we can't find the resource you're looking for</p>
      <a href='/'>Go back home</a>
      `
        )
    }

})


server.listen(port, hostName)
console.log(`Server running at http://${hostName}:${port}`)

module.exports=server