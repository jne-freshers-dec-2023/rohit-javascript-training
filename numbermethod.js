//tostring()
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();
console.log(x);

//toExponential()
let y = 9.656;
y.toExponential(2);
console.log(y);
y.toExponential(4);
console.log(y);
y.toExponential(6);
console.log(y);

//toFixed()
let m=45.2099
console.log(m.toFixed(3));

//toPrecision()

let e = 9.656;
console.log(e.toPrecision());
console.log(e.toPrecision(2));

console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
// Number("10  ");
// Number(" 10  ");
console.log(Number("10.33"));
// Number("10,33");
// Number("10 33");
// Number("John");

console.log(Number(new Date("1970-01-01")));

console.log(Number(new Date("1970-01-02")));

console.log(Number(new Date("2000-10-09")));

//parseInt()

console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
parseInt("10");
console.log(parseInt("10.33"));
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");


console.log(parseFloat("10"));

console.log(parseFloat("10.33"));

console.log(parseFloat("10 20 30"));

console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

console.log(Number.isInteger(4637));
console.log(Number.isInteger(5236.123));