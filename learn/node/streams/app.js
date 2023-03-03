// streams with http revision
// local modules import & export



const http=require('http')
const {readFile}=require('fs').promises

const server=http.createServer(async (req,res)=>{
    var text=await readFile('./stream.txt','utf-8')
    try {
        res.end(text)

    } catch (err) {
        res.end(err)
    }

})



server.listen(3000)