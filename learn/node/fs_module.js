const fs=require('fs')

var text=fs.readFileSync('./contents/subfolder/text.txt','utf-8')

fs.writeFileSync('./contents/subfolder/text.txt','The quick brown fox jumped over the lazy doggo',)
console.log(`The contents are: ${text}`)