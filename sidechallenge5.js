var fs = require('fs');
var text = fs.readFileSync("./sidechallenge5.txt", 'utf-8');
var arr = text.split('\n')
values = arr.slice(0,69)
queries = arr.slice(70);

var arrOfParents=[];
arrOfChilds=[];
values.forEach(val => {
    arrOfParents.push(Number(val.substring(0,val.indexOf(' '))));
    arrOfChilds.push(Number(val.substring(val.indexOf(' ')+1)));
});
queriesarr=[];
queries.forEach(str => {
    let ar=[];
    ar.push(Number(str.substring(0,str.indexOf(' '))));
    ar.push(Number(str.substring(str.indexOf(' ')+1, str.lastIndexOf(' '))));
    ar.push(Number(str.substring(str.lastIndexOf(' ')+1)))
    queriesarr.push(ar);
});
var arr=[];
for (let i = 0; i < arrOfParents.length; i++) {
    let subarr=[];
    subarr.push(arrOfParents[i]);
    subarr.push(arrOfChilds[i]);
     while(arrOfParents[i] == arrOfParents[i+1]){
        subarr.push(arrOfChilds[i+1]);
        i++;
     }
     arr.push(subarr);
     
}

console.log(arr);
console.log(queriesarr);


queriesarr.forEach(q => {
    if(q[0]==2){
        arr.indexOf()
    }
});


/*

// creating node constructor
function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
    }

// creating tree constructor
function Tree(data) {
    var node = new Node(data);
    this.root = node;
}

// creating n-ary tree
for (let i = 0; i < arrOfParents.length; i++) {
    
    var tree = new Tree(arrOfParents[i]);
    var j=0;
    while(arrOfParents[i+1]==arrOfParents[i]){
        tree.root.children.push(new Node(arrOfChilds[i]));
        tree.root.children[j].parent = tree;
        j++;i++;
    }
    tree.root.children.push(new Node(arrOfChilds[i]));
    tree.root.children[j].parent = tree;

    for (let k = 0; k < tree.root.children.length; k++) {
        if(arrOfParents.includes(tree.root.children[k])){
            p = arrOfParents.indexOf(tree.root.children[k]);
            tr = arrOfParents[p]; 
        }
        
    }
    
    tree.root.children[0].children.push(new Node('five'));
    tree.root.children[0].children[0].parent = tree.root.children[0];
    
    tree.root.children[0].children.push(new Node('six'));
    tree.root.children[0].children[1].parent = tree.root.children[0];

    
}
*/

