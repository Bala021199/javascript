// // //1:  SWAP A TWO NUMBER

// /*let a=10;
// let b=5;
// // type 1
// // a=b;
// // b=a;
// // type 2
// [a,b]=[b,a]
// console.log(a);
// console.log(b);
// */

// // //  2.FIND A LARGE 3 NUMBER

// let a = [1, 2, 5, 13, 4];
// let b = a[0];
// for (let i = 0; i <= a.length; i++) {
//   if (i > b) {
//     b = i;
//   }
// }
// console.log(b);

// // // 3. FIND EVEN NUMBER 1 TO 100

// // a=[];
// // for(let i=1;i<=100;i++){
// //     if(i%2==0){
// //         a.push(i)
// //     }
// // }
// // console.log("Even Number are : ");
// // console.log(a);

// // // 4.PALINDROM OR NOT

// // // type 1: using Methods

// // let a="amma";
// // let b=a.split();
// // let c=b.reverse();
// // let d=c.join();
// // if(d==a){
// //     console.log("It's a PALINDROM");
// // }else{
// //     console.log("It's NOT a PALINDROM");
// // }

// // // type 2 : Using Loop

// let a = "manoj";
// let b = " ";
// for (let i = a.length - 1; i >= 0; i--) {
//   b += a[i];
// }
// console.log(b);
// if (a == b) {
//   console.log("It's a PALINDROM");
// } else {
//   console.log("It's NOT a PALINDROM");
// }

// // // 5.ARRAY IN REVERSE ORDER

// // // TYPE 1: Using methods

// // let a=[1,2,3,4,5];
// // console.log("order is: ",a);
// // let b=a.reverse();
// // console.log("REVERSE order is: ",b);

// // // type 2 : Using Loop

// // let a = [1,2,3,4,5];
// // let b = [];
// // for (let i = a.length - 1; i >= 0; i--) {
// // //   b += a[i];
// // b.push(a[i])
// // }
// // console.log(b);

// // // 6.ARRAY PRESENT ON THE EVEN POSITION:

// // let a = [1,2,3,4,5,6,7,8,9,10]
// // let odd=[]
// // for(let i=1;i<a.length;i+=2){
// //     odd.push(i);
// // }
// // console.log(odd);

// // // 7.FIND OOD & EVEN NUMBER FROM ARRAY

// let a=[1,2,3,4,5,6];
// let even=[];
// let odd=[];
// let b=0;
// for (let i=1;i<a.length+1;i++){
//     if(i%2==0){
//         even.push(i);
//     }
//     else{
//         odd.push(i)
//     }
// }
// for(let i=0;i<even.length;i++){
//     b+=even[i];
// }
// console.log(b);
// // let sumEven=even.reduce(function(pre,cur){
// //     return pre+cur
// // });
// // let sumOdd=odd.reduce(function(pre,cur){
// //     return pre+cur
// // });
// // console.log("Even Numbers is : ",even);
// // console.log("Sum of Even is :",sumEven);
// // console.log("odd Numbers is : ",odd);
// // console.log("Sum of Odd is :",sumOdd);

// // // 8.FIND 1 TO 100 ALL PRIME NUMBERS

// let b = [];
// for (var i = 2; i <= 100; i++) {
//   var x = false;
//   for (var j = 2; j <= i; j++) {
//     if (i % j === 0 && j !== i) {
//       x = true;
//     }
//   }
//   if (x === false) {
//     b.push(i);
//   }
// }
// console.log(b);
// console.log("The sum of prime number : ");

// // // 9.SORT A ARRAY IN ASCENDING ORDER:

// let a = [9, 5, 4, 6, 1];
// let b = a.sort(function(x,y){return y-x});
// console.log(b);

// // // // 10.CALLBACK FUNCTION SIMPLE EXAMPLE

// // function add(sum){
// //     console.log("Add Sum Values");
// //     sum();
// // }
// // function sum(a,b){
// //     return a+b;
// // }
// // let c=sum(6,5);
// // add(c);
