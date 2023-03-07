const {createServer}=require('http')

const server=createServer((req,res)=>{
    console.log(req.url)
    if(req.url==='/'){
        res.write('Dream of Lion king')
    }else if(req.url==='/about'){
res.end('weti man go do')
        for(var i=0;i<=1000;i++){
            for(var j=0;j<=100;j++){
                console.log('loading')
            }
        }


    }else{
        res.write('Page not found')

    }
    res.end()
})

server.listen(3000)
console.log(`server running on port: http://127.0.0.1:3000`)