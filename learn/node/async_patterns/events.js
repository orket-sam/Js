const http=require('http')
const {readFile}=require('fs').promises


const server=http.createServer()

server.on('request',async( req,res)=>{
 var page=   await readFile('./index.html','utf-8',)
 res.emit

//  res.setHeader("Content-Type", "text/html");
res.end(JSON.stringify(JSON.stringify()))
})

// const server=http.createServer(async (req,res)=>{
//    var page=await readFile('./index.html','utf-8')
//    res.write(`${page}`)
//    res.end()
// })
server.listen(3000)
console.log(`server running at ${'http://127.0.0.1:3000'}`);