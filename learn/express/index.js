const http=require('http')

const server=http.createServer((req,res)=>{
    const url=req.url
    console.log(url)
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.end(`
        <h2>Welcome home</h1>
        `)
    }else if(url==='/about'){
        res.writeHead(201,{'content-type':'text/plain'})
        res.end('I hope that you\'ll remember me')
    }else{
        res.writeHead(404)
        res.end('Unavailable resource')
    }
})


server.listen(3000,()=>console.log('server running on http://127.0.0.1:3000'))