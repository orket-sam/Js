
const { log } = require('console')
const http=require('http')
const server=http.createServer((req,res)=>{
    res.write('Maasai')
    res.end()
    console.log('incoming request')
})
server.listen(3000)