var fs = require('fs');
var text = fs.readFileSync("./challenge3input.txt", 'utf-8');
var numbers = text.split('\n')
console.log(numbers);
//! so the numbres have 3 first digits not included in the encryption
//! we will sum the first two numbers to get the index of the begining letters(count from 0)
//! then  we will verify each 2 digits if they r uppercase letter or not 
//! if it is an uopercase letter we will concatinate it to the message

var message ='';
numbers.forEach(number => {
    var index = Number(number[0])+Number(number[1]); 
    letters = 3 + index;
    for (let i = 0; i < number[2]; i++) {
        asciicode = Number(number.substring(letters,letters+2));
        if(asciicode<=90 && asciicode>=65){
            message = message + String.fromCharCode(asciicode);
        }
        letters = letters+2;  
    }
   console.log(message);
});