const {readFile,writeFile}=require('fs')
const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)


async function start () {
const first=await readFilePromise('./hello.txt','utf-8')
await  writeFilePromise('./hello.txt','The quick brown fox jumped over the lazy dog\n',{flag:'a'})
const second=await readFilePromise('./hello.txt','utf-8')

console.log(first)
console.log(second)


}

start()

