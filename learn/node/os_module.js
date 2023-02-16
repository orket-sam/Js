
// os module
const os=require('os')

console.log(`The system has been up for ${os.uptime()/3600} hours`);
var userInfo=os.userInfo()
console.log(userInfo);
console.log(os.arch())