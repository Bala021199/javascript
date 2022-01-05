// --------PRIMITIVE DATATYPE--------
var a = 10;
b = a;
console.log(b);
b = 20;
console.log("b value is changed", b);
console.log("a value is changed", a);

// ---------- REFERENCE DATATYPE---------

// Object,array

let arr = [1, 2, 3, 4, 5];
arr1 = arr;
console.log(arr1);
arr1.push(6);
console.log("arr1 value is changed", arr1);
console.log("arr value is NOT changed", arr);
