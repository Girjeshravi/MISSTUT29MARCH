//console.log(a);// will show error that a is not defined


// -----------------------------xx-----------------------

// let a
// console.log(a); // will show an error -- cannot access a before initialisation

// let a=10;
// here linr 6 to line 10 is called temporaldeadzone -- but it is not an area it is time zone --


// -----------------------------xx-----------------------





// var is hoisted in nature

// let is also hoisted in nature but temporalzone is only added with let


function hello(){
    // let age
    function smile(){
        console.log(age);
    }
    let age=10;
    smile(); //line 25 to 29 is the temporalzone but it is time in between this lines
}
hello(); 
// tdz is not are but its a time period