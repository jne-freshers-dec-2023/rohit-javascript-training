//Arithmatic operators
let a=10+10;
console.log(a);

let b=10;
let c=40;
console.log(b+c);

//Subtraction operator (-)
let result = 30 - 10;
console.log(result); // 20

//multiplication
let result1 = 2 * 3;
console.log(result1);

let result2 = '5' * 2;
console.log(result2);   

//divide operator
let result3 = 20 / 10;
console.log(result3); // 2

let result4 = '20' / 2; //Number() function convert into number and then perform operation
console.log(result4); // 10;

//Arithmatic operation on object 
let energy = {
    valueOf() {
      return 100;
    },
  };
  console.log("==============");
  let currentEnergy = energy - 10;
  console.log(currentEnergy);
  
  currentEnergy = energy + 100;
  console.log(currentEnergy);
  
  currentEnergy = energy / 2;
  console.log(currentEnergy);
  
  currentEnergy = energy * 1.5;
  console.log(currentEnergy);

//if valueOf() method is not present then toString() is used to get value

let energy1= {
    toString() {
      return 50;
    },
  };
 console.log("============="); 
  let currentEnergy1 = energy1 - 10;
  console.log(currentEnergy1);
  
  currentEnergy1 = energy1 + 100;
  console.log(currentEnergy1);
  
  currentEnergy1 = energy1 / 2;
  console.log(currentEnergy1);
  
  currentEnergy1 = energy1 * 1.5;
  console.log(currentEnergy1);

  //reminder operator
  let remainder1 = 5 % -2;
console.log(remainder1); // 1

remainder2 = 5 % 2;
console.log(remainder2);

let remainder3 = -5 % 3;
console.log(remainder3); // -2

remainder4 = -5 % -3;
console.log(remainder4); 

let remainder5 = 10 % 0;
console.log(remainder5); //Nan

let remainder = '10' % 3;
console.log(remainder); // 1

//check number is odd or even 

let num=23

if(num%2==1)
{
    console.log("odd");
}
else{
    console.log("even");
}

//arrow function
const isOdd = (num) => num % 2;
console.log(isOdd);

//reminder vs modules
const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// dividen and divisor have the same sign
console.log('remainder:', 5 % 3); // 2
console.log('modulo:', mod(5, 3)); // 2

// dividen and divisor have the different signs
console.log('remainder:', -5 % 3); // -2
console.log('modulo:', mod(-5, 3)); // 1

let m = 10, n = 20, o = 30;
m = n = o; 
console.log(m);

//unary operator
let x = 10;
let y = +x;

console.log(y); // 10

let s = '10';
console.log(+s); //convert into number

let f = false,
    t = true;

console.log(+f); // 0
console.log(+t); // 1

let person = {
    name: 'John',
    toString: function () {
      return '25';
    },
  };
  
  console.log(+person);

  console.log("==========");
  let person1 = {
    name: 'John',
    toString: function () {
      return '25';
    },
    valueOf: function () {
      return '30';
    },
  };
  
  console.log(+person1);

  //unary minus
let q = 10;
let e = -q;
console.log(e); // 

//comparison operator

let apple = {
    valueOf: function () {
      return 10;
    },
  };
  
  let orange = {
    toString: function () {
      return '20';
    },
  };
  console.log(apple > 10); // false
  console.log(orange == 20); // true

  //compare operator
  console.log(null == undefined);

  console.log("--------");   
  console.log("10" == 10); // true
  console.log("10" === 10); // false

  //Logical operator

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

let eligible = true,
    required = true;

console.log(eligible && required); // true

let eligible1 = true,
    required1 = true;

console.log(eligible1 || required1); // true
  