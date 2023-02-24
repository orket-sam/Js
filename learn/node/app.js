const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('Welcome home Orket')
    }else{
        res.write(`
        
      <h1>Invalid address</h1>
      <a href="/">Go Home</a>
        `)
    }
    res.end()
})


const hostName='127.0.0.1'
const port=3000

server.listen(port,hostName)
console.log(`server running: http://${hostName}:${port}`);