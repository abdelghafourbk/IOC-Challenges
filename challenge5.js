//! we must get the smallest x in the list and then we verify if its already in the previous 
//! one (check x and y) if it's not we will add it to the combination, also 

var fs = require('fs');
var text = fs.readFileSync("./challenge5input.txt", 'utf-8');
var sizes = text.split('\n')
//console.log(sizes);
arrglobal =[];
arrofX = [];
arrofY =[];
sizes.forEach(size => {
    x = size.substring(0,size.indexOf(' '));
    y = size.substring(size.indexOf(' ')+1);   
    let arr=[Number(x),Number(y)];
    arrofX.push(Number(x));
    arrofY.push(Number(y));
    arrglobal.push(arr);
});
//console.log(arrglobal);
//console.log(arrofX);
//console.log(arrofY);

FinalArrofY=[];
FinalArrofx=[];
var prev = [-1,-1];
while(arrofX.length >0 ) {
    min = Math.min(...arrofX);
     i = arrofX.indexOf(Math.min(...arrofX));
    
    if((arrofX[i] > prev[0]) && (arrofY[i] > prev[1])){
        FinalArrofx.push(arrofX[i]);
        FinalArrofY.push(arrofY[i]);
        prev[0] = arrofX[i];
        prev[1] = arrofY[i];    
    }
    arrofX.splice(i,1);
    arrofY.splice(i,1);
}

console.log(FinalArrofx);
console.log(FinalArrofY);
const reducer = (accumulator, curr) => accumulator + curr;
console.log(FinalArrofx.reduce(reducer));
console.log(FinalArrofY.reduce(reducer));
