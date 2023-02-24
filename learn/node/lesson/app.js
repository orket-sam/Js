const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(res.statusCode);
    console.log(req.url);
    res.write('Endelezi')
    res.end()
})

server.listen(3001)