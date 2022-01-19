
var fs = require('fs');
var text = fs.readFileSync("./Survivors - Main-main.txt", 'utf-8');
var words = text.split('\n')


firstRow =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//* [A,B,C,.....,Z,a,b,c,....z] each time it rotates left so the second time will be 
//* [B,C,.....,Z,a,b,c,....z,A]  52 times.
//* The characters of the keys are duplicated to match the length of the string to be ciphered.
//* key[i]  : dictionary
//* A : A , B , C , D, ......
//* B : B  , C , D, ...., A
//* C : C , D, ...., A ,B

//* SAfeCitY => 
//* IocIocIo
//* KMDWOGlk
//* means the S using the I key becomes K

//? so we r getting the key[i] then search for it in the firstRow by index then reading the firstRow step by step with incrementation,
//? if we get the letter of the word we stop and we get the value from firstrow[steps].
var r="";

words.forEach(str => {
    var mot = str.substring(0,str.indexOf('-'));
    var cle = str.substring(str.indexOf('-')+1);
    let i=0;
    while(cle.length<mot.length) {
        cle = cle + cle[i];
        i++;
    }
   
    while (cle.length>mot.length) {
       cle= cle.slice(0,-1);        
    }
    console.log(mot,cle);
   for (let j = 0; j < cle.length; j++) {
       k = firstRow.indexOf(cle[j]);
       let step =0;
       console.log(mot[j]);
        if (mot[j].toUpperCase()!==cle[j].toUpperCase()) {
            for (let s = k; s<firstRow.length; s++) { 
                step++;
                if (firstRow[s]==mot[j]) {
                    break;
                }
                if (s == firstRow.length-1) {
                    s = 0;
                }   
               
               }
        }else{
            step=26;
        }
      
       r=r+firstRow[step];
       console.log(r);
   }
   r=r+'-';
   console.log(r);
});
