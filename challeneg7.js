
var fs = require('fs');
var text = fs.readFileSync("./Protect & Rebuild - Main-main.txt", 'utf-8');
var sizes = text.split('\n')
console.log(sizes);

var sum = 0;
//? [0,2,1,0,6,7,3,0,0,1]

arrr=[];
sizes.forEach(size =>{
    arrr.push(size.split(' ').map(i=>Number(i)));;
});

arrr.forEach(t => {
    for (let k = 0; k < t.length; k++) {
        if(t[k]>t[k+1]){
            i=k+1;
            var arr=[];
            var arrin=[];
            
                while (t[k]>t[i] && i<=t.length-1) {
                    arr.push(t[i]);
                    arrin.push(i);
                    i++;
                }
            if(i<=t.length-1){
            if (t[i]>=t[k]) {
               arr.forEach(e=>{
                        sum = sum+(t[k]-e); 
                        t[arrin[arr.indexOf(e)]]=t[k];
                });
            }
        }
            k=i-1;
           
        } 
     }
     t.reverse();
     
 for (let k = 0; k < t.length; k++) {
    if(t[k]>t[k+1]){
        i=k+1;
        var arr=[];
        var arrin=[];
        
            while (t[k]>t[i] && i<=t.length-1) {
                arr.push(t[i]);
                arrin.push(i);
                i++;
            }
        if(i<=t.length-1){
        if (t[i]>=t[k]) {
           arr.forEach(e=>{
                    sum = sum+(t[k]-e); 
                    t[arrin[arr.indexOf(e)]]=t[k];
            });
        }
    }
        k=i-1;
       
    } 
 }
 
 console.log(sum);
    
});

/*
t=[7,12,1,6,6,2,1,11,9,1,9]
for (let k = 0; k < t.length; k++) {
    if(t[k]>t[k+1] && k<t.length-1){
        i=k+1;
        var arr=[];
        var arrin=[];
        
            while (t[k]>t[i] && i<=t.length-1) {
                arr.push(t[i]);
                arrin.push(i);
                i++;
            }
        if(i<=t.length-1){
        if (t[i]>=t[k]) {
           arr.forEach(e=>{
                    sum = sum+(t[k]-e); 
                    t[arrin[arr.indexOf(e)]]=t[k];
            });
        }
    }
        k=i-1;
       
    } 
 }
 //*reverse
 t.reverse();
 console.log(sum);
 for (let k = 0; k < t.length; k++) {
    if(t[k]>t[k+1] && k<t.length-1){
        i=k+1;
        var arr=[];
        var arrin=[];
            while (t[k]>t[i] && i<=t.length-1) {
                arr.push(t[i]);
                arrin.push(i);
                i++;
            }
            if (i>t.length-1) {
                break;
            }
        if(i<=t.length-1){
        if (t[i]>=t[k]) {
           arr.forEach(e=>{
                    sum = sum+(t[k]-e); 
                    t[arrin[arr.indexOf(e)]]=t[k];
            });
        }
    }
        k=i-1;
  
    } 
 }
 console.log(sum);*/
 


