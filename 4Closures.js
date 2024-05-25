// HOF (HIGHER ORDER FUNCTION) :-- A function that takes another function as an arguement or return a function as a result is called a higher order function

// function hello(){
//     return ()=>{
//         console.log("hello world");
//     }
// }


// --------------------------------------------------------
function hello (){
    let a=0;
    return ()=>{
        a++
        console.log(a);
    }
    // the only concept here is a is here treated as global variable for this particular inner function
}
let x=hello();
x();
x();
console.log(a);

// CLOSURE  : A closure is a function that has access to the outer function scope even after the outer function has returned.
// ex : in above hof we can see the inner function can acces a variable even after outer function has returned his value;