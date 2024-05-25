
let z=10;
var x=100;
function hello(){
    var a=10;
    let b=100;
    c=300;
}
hello();
// console.log(a);// var is a global scope until it is declared in function
// console.log(b);// let is block scope 
console.log(z);
console.log(x);
console.log(c); // no boundation of scope it is global in nature