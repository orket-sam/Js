const {readFile,writeFile}=require('fs')

readFile('./contents/subfolder/text.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Read operation failed')
    }else{
        console.log(`Text: ${data}`)
    }
})

writeFile('./contents/subfolder/text.txt','Orket is awesomme',(err,data)=>{
    if(err){
        console.log('Write operation failed')
    }else{
        console.log('Writing done')
    }
})