const {EventEmitter}=require('events')

const eventEmitter=new EventEmitter();

eventEmitter.on('orket',()=>console.log('Very nice guy'))


eventEmitter.emit('orket')