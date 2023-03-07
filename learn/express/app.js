const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    console.log(req.url);
    
    res.send('Ends of earth')
})

app.listen(3000,()=>{
    console.log('server on port http://127.0.0.1:3000')
})