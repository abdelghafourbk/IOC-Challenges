//! 2(ASCII(character)) + Un | U0=0 , U1=1 ;
//! With "Un" is the fibonacci sequence of the position of the character in the string.

//*  return the sum of each manipulation of the characters of the said string.

encrypted ="laIiTXaRPfyJDZJzDundefinedwstdencHxOmGqtUwmliDIRdMQUYyyXbRYzMofuGpcVULsTzkfyeIWpXyv" 

function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
  }


var sum = 0;
for (var i = 0; i < encrypted.length; i++) {
    sum = sum + (2 * encrypted.charCodeAt(i)) + fib(i);
    console.log(sum);
}
