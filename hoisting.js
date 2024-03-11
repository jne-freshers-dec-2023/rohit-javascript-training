//used variable before declaration
console.log(counter); // 👉 undefined
var counter = 1;

let x = 20,
  y = 10;

let result = add(x, y); 
console.log(result); // 👉 30

function add(a, b) {
  return a + b;
}