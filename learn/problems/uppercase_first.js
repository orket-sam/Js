
// ("moveMENT") ➞ "MENTmove"
// Create function that moves all capital letters to the front


var capital=[]
var small=[]

function upperFirst( words){
    var arrayWords=words.split('');
    for(var i=0;i<arrayWords.length;i++){
        if(arrayWords[i]==arrayWords[i].toUpperCase()){
            capital.push(arrayWords[i])
        }else{
            small.push(arrayWords[i])
        }
}

console.log(capital.join('')+small.join(''))
    
}



upperFirst('samUEL')