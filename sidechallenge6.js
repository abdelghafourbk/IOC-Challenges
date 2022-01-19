var fs = require('fs');
var text = fs.readFileSync("./Survivors - Side-side.txt", 'utf-8');
var words = text.split('\n')


//* we realised that the other cities can be affected by those monsters if they are connected to two affected cities or more
//* destroy roads between unaffected cities and affected cities so the enemy can’t come closer, each road takes an amount of time to be destroyed.
//* the minimum time needed to destroy roads.
//? The affected cities : are represented by red circles
//? The safe city: is the city number 0.
//? The unaffected cities: are represented by black circles.


var city1=[];
var city2=[];
var affected=[];
var situation=[];
var time=[];
var r=0;
var test=[];
words.forEach(word => {
    
    city1.push(word.substring(0,word.indexOf(' ')));
    part2 = word.slice(word.indexOf(' ')+1);
    city2.push(part2.substring(0,part2.indexOf(' ')));
    part3= part2.slice(part2.indexOf(' ')+1);
    time.push(part3.substring(0,part3.indexOf(' ')));
    part4= part3.slice(part3.indexOf(' ')+1); 
    situation.push(part4);
});

for (let i = 0; i < situation.length; i++) {
  /*  if(situation[i]=="i"){
        if (!affected.includes(city2[i])) {
            affected.push(city2[i]);
            r = r + Number(time[i]);
        }    
    }else{
        if (!affected.includes(city1[i])) {
            affected.push(city1[i]);
            r = r + Number(time[i]);
        }
    }*/

    if (situation[i]=='i') {
        if(!affected.includes(city1[i])){    //* safe
            if (!affected.includes(city2[i])) { //* safe, safe
                affected.push(city2[i]);
                r = r + Number(time[i]);
            }else{                          //* safe, infected already => this one 650 if deleted
                r = r + Number(time[i]);
            }
        }else{                               //*infected already
            if(!affected.includes(city2[i])){   //* infected already, safe
                affected.push(city2[i]);
            }else{
                affected.push(city1[i]);
            }
        }
    }else{
        if(affected.includes(city1[i])){
            if (!affected.includes(city2[i])) {
                r = r + Number(time[i]); 
            }
        }
    }
}
console.log(r);
    //? correct answer is 607