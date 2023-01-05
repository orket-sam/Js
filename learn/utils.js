


const sayHello = (name) => console.log(`Hello ${name}`)
const names=require('./names')


function sayHi(name){
    console.log(`${name}`)
}


sayHello(names.orket);
sayHello(names.sam);


module.exports={sayHello,sayHi}