// streams with http revision
// local modules import & export



const http=require('http')
const {readFile,createReadStream}=require('fs')

const server=http.createServer(async (req,res)=>{

  const dataStream=createReadStream('./stream.txt')

  dataStream.on('data',()=>dataStream.pipe(res))
  dataStream.on('error',(err)=>res.end(err.message))

})



server.listen(3000)