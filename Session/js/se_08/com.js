// OBJECT DESTRUCTURING

const x = { a: 1, b: 2, c: 3 };

const { a, b, c } = x;

console.log(a);
console.log(b);
console.log(c);

//   Nested
const y = { d: 4, e: { f: 6, g: 7 } };

const {
  e: { f },
} = y;

const {
  e: { g: val },
} = y;
console.log(f);
console.log(val);

// TEMPLATE STRING

let z = "HI";

console.log(`${z} Manoj 
  

How are You?`);
