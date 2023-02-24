const {readFile}=require('fs').promises


async function getText(){
    try {
        const text= await readFile('./hello.txt','utf8')
        console.log(text);

        
    } catch (error) {
        console.log('unlucky day');
    }
}

getText()

