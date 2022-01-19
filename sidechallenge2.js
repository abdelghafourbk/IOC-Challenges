var fs = require('fs');
var text = fs.readFileSync("./-side.txt", 'utf-8');
var words = text.split('\n')
//console.log(words);

//! so the idea is we will get the second (correct) word and take it char by char
//! in a loop and compare that char with characters in the first word, if a char
//! match the same char in word 2 we will delete it, if we complete the second word loop
//! we will verify if a letter stay in the first word.
combined = '';
words.forEach(couple => {
    firstword = couple.substring(0,couple.indexOf(' '));
    secondword = couple.substring(couple.indexOf('-')+2);
    for (var i = 0; i < secondword.length; i++) {
        for (var j = 0; j < firstword.length; j++) {
            if(secondword[i]==firstword[j]){
                //console.log(secondword[i],firstword[j]);
                //console.log(secondword);
                //console.log(i);
                //console.log(j);
                secondword = secondword.replace(secondword[i],'');
               // console.log(secondword);
                //console.log(firstword);
                firstword = firstword.replace(firstword[j],'');
                //console.log(firstword);
                i--; j--;
                break;
            }
        }
       
    }
    if (firstword.length == 1) {
        combined = combined + firstword;
       // console.log(combined);
    }

});
console.log(combined);