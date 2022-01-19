var fs = require('fs');
var text = fs.readFileSync("./-main.txt", 'utf-8');
var messages = text.split('\n')
console.log(messages);
//! the idea is after : we will start counting and reading the 8 first bits and store it in a variable and then we will compare it to the last 8 bits
//! if they r the same we will increment the number of moles.
/*
var moles = 0;
messages.forEach(message => {
     mess = message.substring(message.indexOf(':') + 1); 
     //console.log(mess.substring(0,7));
     if(Number(mess.substring(0,8))===Number(mess.substring(mess.length-8))) moles++;
    
});
console.log(moles); */