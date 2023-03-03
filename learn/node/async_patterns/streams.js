const http = require('http')
const { createReadStream } = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
    const dataStream = createReadStream('./streams.txt', { encoding: 'utf-8', highWaterMark: 10 },)
    dataStream.on('open',()=>dataStream.pipe(res))
    dataStream.on('error',(err)=>res.end(err.message))
})


server.listen(3000)