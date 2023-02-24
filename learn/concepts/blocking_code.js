const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=='/'){
        res.end('Welcome home')
    }else if(req.url=='/about'){
        res.write('The killerss')

        for(var i=0;i<=1000;i++){
            for(var j=0;j<=1000;j++){
                console.log('Blocking code');

            }


        }
        res.end();
    }else{
        res.end('\nHey boy go back')
    }
})

server.listen(3000)