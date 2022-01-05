//  //1.REMOVE DUPLICATES FROM ARRAY

// let a =["A","C","A","B","D","B"];
// let b=[...new Set(a)]
// console.log(b);

// // 2.DISPLAY CURREN DATE & TIME

// var today =new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// console.log("Today Date is : ",date);
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// console.log("Today Time is : ",time);

// // 3.MULTIPLICATION & DIVISION GET VALUE FROM USER

// let a=prompt("Enter A value : ")
// let b =prompt("Enter B Value : ")
// console.log("Multiplication of Value is : ",a*b);
// console.log("Division of Value is : ",a/b);

// // 4.GET A WEBSITE URL

// console.log(document.URL);

// // 5.GET DIFFERENCE BETWEEN 13

// let n=Number(prompt("Enter a Number : "));
// if (n<=13){
//     console.log(13-n);
// }else{
//     console.log(n-13)*2;
// }

// //6.SUM TWO INTEGER IF EQUAL RETURN TRIPLE SUM

// let a = Number(prompt("Enter First Integer : "));
// let b = Number(prompt("Enter Second Integer : "));
// if(a==b){
//     console.log(3*(a+b));
// }else{
//     console.log(a+b);
// }

// //7.COMPARE TWO ARRAY AND FORM THIRD ARRAY

// let a=[1,2,3,4,5,6,7,8,9];
// let b=[2,4,5,3];
// let c=[];
// for(let i=0;i<=a.length;i++){
//     for(let j=0;j<=b.length;j++){
//         if(a[i]==b[j]){
//             c.push(b[j]);
//         }
//     }
// }
// console.log(c);

// // 8.FORM A ARRAY DIVISIPLE BY 6 BUT NOT 9 FORM 1 TO 100

// let a = [];
// for (let i = 1; i <= 100; i++) {
//   if (i % 6 == 0 && i % 9 !== 0) {
//     a.push(i);
//   }
// }
// console.log(a);

// // 9.REMOVE A CHARACTER AT THE SPECIFIED POSIOTION CREATE A NEW STRING

// let a =String(prompt("Enter a string : "));
// let b=Number(prompt("Enter a Posisiton : "));

// part1 = a.substring(0, b);
// part2 = a.substring(b + 1, a.length);
// console.log(part1 + part2);

//  //10.CREATE A NEW STR FORM A STR CHANGE 1ST & LAST POISITION

// let a=String(prompt("Enter a String : "));
// console.log("Given String is: ",a);
// let mid=a.slice(1,-1);
// let first=a.slice(0,1);
// let last=a.slice(-1);
// console.log("Output String is: ",last+mid+first);









