const os=require('os');


var pcDetails={
    type:os.type(),
    upTime:os.uptime(),
    freeMemory:os.freemem()/1024,
    totalMemory:os.totalmem()/1024,
    platform:os.platform()
}


console.log(pcDetails);