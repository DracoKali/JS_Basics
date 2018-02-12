

var x = [];
var a =[];
var y = "Coding";
var q = "Dojo";
var z = "Rocks";
var r = [9, 10, 6, 5, -1, 20, 13, 2];
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
var length ;

// Add variable to array
 x.push(y,q,z);
 console.log(x);
// Remove variable from array
 x.pop(z);
 console.log(x);
//  Add number to empty array
a.push(88);
console.log(a);
// Print array
console.log(r);
r.pop(r[7]);
console.log(r);
// Print length of names
console.log(names);
console.log("There are " + names.length + " names in the array.");
for(i = 0; i <= names.length; i++){
    console.log(names[i].length);
    var newArr = [];
    if (names[i].length == 5){
        console.log(names[i]);

    }
}

function yell(something){
    console.log(something.toUpperCase())
    console.log(something.toLowerCase())

}

yell("hello");





