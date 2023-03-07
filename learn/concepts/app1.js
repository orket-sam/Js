const {readFile}=require('fs').promises

async function getText(){

    const text=await readFile('./hello.txt','utf-8')
    try {
        console.log(text)
    } catch (error) {
        console.log('oopss');
    }
}

getText()