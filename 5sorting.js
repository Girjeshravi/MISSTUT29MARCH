// give me an array of string unsorted
let arr=['a','c','d','w','b','c','q','i','h','g','j','s','n','m'];
arr.sort();
console.log(arr);

// ----------------------------------------------------
let brr=[3,10,1,2];
// let brr=["3","10","1","2"]; --- above array will behave as string so it will sort in the order 1,10,2,3
// brr.sort();
// console.log(brr);

//----------------------------

// so this we have to always keep in mind

let br=[3,10,1,2];
br.sort((a,b)=>(a-b)); // adscending order
// br.sort((a,b)=>(b-a)); // descending order
console.log(br);

// if + => the number will be interchanged
// if - => the number will be in same order
