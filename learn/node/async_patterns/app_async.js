const {readFile,writeFile}=require('fs').promises


const getText=async (path)=>{

    try {
    const text= await readFile(path,'utf-8')
    console.log(text);
    console.log('wait')
    } catch (error) {
        console.log('oops');
    }
}

getText('./hello.txt')
getText('./test.txt')