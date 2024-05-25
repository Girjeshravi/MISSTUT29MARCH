// console.log(a); // error
// console.log(b); // undefine; // in var declaration come to the top

let a=10;
var b=100;

// if we declare any variable as var then it will move to the top of the page



// -------------------------------------------------------
// console.log(p2); // error
function hello(){
    // var p2 ----// p2 declartion comes here but not with its value
    console.log(p2);// undefine because just above var p2 come
    var p2=10;
    console.log(p2);// will print 10
}
hello();



// HOISTING :-  it is mechanism in javascript where varaibles and function declarations are moved to the top of their scope before code execution