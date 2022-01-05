// ---------------------- ANAGRAM OR NOT ---------------------------

// var x="abac";
// var y="aabc";

// var x = "Hello";
// var y = "lohle";

// let a = x.split('').sort().join('').toUpperCase();
// let b = y.split('').sort().join('').toUpperCase();

// if (a == b) {
//   console.log("It's a Anagram");
// } else {
//   console.log("It's NOT a Anagram");
// }

// ---------------------- REMOVE DUPLICATES ---------------------------

// const array = ["a","b","a","c"];
// const array = [4, 5, 6, 4, 7, 9, 1];
// let a = [];
// for (let i of array) {
//   if (a.indexOf(i) === -1) {
//     a.push(i);
//   }
// }
// console.log(a);

// ---------------------- FACTORIAL NUMBER WITH RECURSION ---------------------------

// function fact(x) {
//   if (x === 0) {
//       return 1;
//   }
//   else {
//       return x * fact(x - 1);
//   }
// }
// const n = 5;
// if (n > 0) {
//   let result = fact(n);
//   console.log(`The factorial of ${n} is ${result}`);
// }

// ---------------------- GCD ---------------------------

// const number1 = prompt('Enter a first positive integer: ');
// const number2 = prompt('Enter a second positive integer: ');
// for (let i = 2; i <= number1 && i <= number2; i++) {
//     if( number1 % i == 0 && number2 % i == 0) {
//         hcf = i;
//         // console.log("i is",i);
//     }
// }
// console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

// -------- RECURSION------------
// let gcd = (num1, num2) => {
//   while(num1 != num2){
//     if(num1 > num2){
//       num1 = num1 - num2;
//     }else{
//       num2 = num2 - num1;
//     }
//   }
//   return num2;
// }
// console.log("The GCD IS : ",gcd(12,30));

// ---------------------- FIBBONOCICES ---------------------------

// let n=String(prompt("Enter a Number : "));
// a=0;
// b=1;
// console.log(a);
// console.log(b);
// for(let i=2;i<=n;i++){
//   c=a+b;
//   a=b;
//   b=c;
//   console.log(c)
// }

// ---------------------- PASSCAL TRIANGLE ---------------------------

function pascals(n) {
  if (n === 0) return [];
  if (n === 1) return [[1]];
  let result = [];
  for (let i = 1; i <= n; i++) {
    let a = [];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        a.push(1);
      } else {
        a.push(result[i - 2][j - 1] + result[i - 2][j]);
      }
    }
    result.push(a);
  }
  return result;
}
console.log(pascals(5));

// ---------------------- BUBBLE SORT---------------------------

function swap(get, a, b) {
  let temp = get[a];
  get[a] = get[b];
  get[b] = temp;
}

function res(aa){
    
}
