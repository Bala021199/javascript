// ---------Function Hoisting----------
// 1:
// fn();
// function fn(){
//     console.log("Fuction inside declaration");
// }

// 2:
// fn1();
// let fn1 =function()
// {
//     console.log("Function out side declaration");
// }

// ------------ Funtional Parameter -----------

// ----normal-------
function sum(a, b) {
  return a + b;
}
console.log(sum());

// ------- Expression-------
let sum = function (a, b) {
  return a + b;
};
console.log(sum(15, 20));

// -------- Arrow Function-------
let arro = (a, b) => a + b;
console.log(arro(10, 20));

// ------Task-------                        o/p:Undefined
let arro = (a, b) => {
  a + b;
};
console.log(arro(10, 20));

let arro = (a, b) => {
  return a + b;
}; // o/p:30
console.log(arro(10, 20));





// PRIMITIVE DATATYPE
// REFERENCE DATATYPE
