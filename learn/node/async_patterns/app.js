const {readFile,writeFile}=require('fs')

function getText(path){
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,result)=>{
            if(err){
                    reject(err)
            }else{
                    resolve(result)
            }
        })
    })
}




function writeText(path){
    return new Promise(
       (resolve,reject)=>{
        writeFile(path,'what lovers do',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(getText(path))
                console.log('done');
            }
        })
       }
    )
}
// getText('./hello.txt').then((data)=>console.log(data)).catch((err)=>console.log(err))
writeText('./test.txt').then((data)=>console.log(data)).catch((err)=>console.log(err))