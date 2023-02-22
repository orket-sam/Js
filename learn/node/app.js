const http=require('http')

const port=3000
const hostName='127.0.0.1'


const server=http.createServer(
    (req,res)=>{

console.log(req.url);
        if(req.url=='/'){
            res.write('Welcome home ')
        }else{
            res.write(  `
            <h1>Page doesn't exist</h1>
            <a href="/">Go Back Home</a>
            `)
        }
        res.end()
    }
)

server.listen(port,hostName)

console.log(`server is running on : http://${hostName}:${port}`);