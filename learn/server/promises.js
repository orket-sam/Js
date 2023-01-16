const { readFile, writeFile } = require('fs');


const getText = (path) => {
    return new Promise((resolve, reject) => {

        readFile(path, 'utf-8', (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

getText('./hello.txt').then((res) => console.log(res)).catch((err)=>console.log('oops'));