const {readFile,writeFile}=require('fs')



var first;
var second;
readFile('./contents/subfolder/first.txt','utf8',(error,result)=>{
    if(error){
        console.log('unable to read file 1');
    }else{

        first=result;
        readFile('./contents/subfolder/second.txt','utf8',(error,result)=>{
            if(error){
                console.log('unable to read file 2');
            }else{
                second=result;
                writeFile('./contents/subfolder/third.txt',`${first} \n ${second}`,(error,res)=>{
                    if(error){
                        console.log('oops');
                    }else{
                        readFile('./contents/subfolder/third.txt','utf8',(error,result)=>{
                            if(error){
                                console.log('unable to read file 3');
                            }else{
                                console.log('done');
                            }
                        })
                    }
                })
            }
        })
        

        
    }
})






