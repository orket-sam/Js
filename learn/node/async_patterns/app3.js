const {readFile,writeFile}=require('fs').promises

async function getText(path){

    const text=await readFile(path,'utf-8')
    return text;
}

const start=async ()=>{
    console.log('heyya');
    console.log('outkast');

await writeFile('./hello.txt','\n Ultimatum',{flag:'a'})
 const first=await getText('./hello.txt')
 const second=await getText('./test.txt')
 console.log(`${first}: \n ${second}?`)
}


start()