const d = new Date();
console.log(d);

//create date object from string
const d1 = new Date("2022-03-25");
console.log(d1);


const d2 = new Date(2018, 11, 24);
console.log(d2);
const d3 = new Date(2018, 11);
console.log(d3);
const d4 = new Date(2018, 11);
console.log(d4);

const d5 = new Date(2018);
console.log(d5);

const d6 = new Date(99, 11, 24);
console.log(d6);

const d7 = new Date(9, 11, 24);
console.log(d7);

//date in milliseconds
const d8 = new Date(100000000000);
console.log(d8);

const d9 = new Date(24 * 60 * 60 * 1000);
console.log(d9);

const d10 = new Date(0);
console.log(d10);

// date methods

//convert into string
const d11 = new Date();
d11.toString();

const d12 = new Date();
d12.toDateString();

const d13 = new Date();
d13.toUTCString();

const d14 = new Date();
d14.toISOString();