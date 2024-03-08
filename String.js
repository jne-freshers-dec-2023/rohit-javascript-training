//backtick(`) character
let str="`Rohit`";
console.log(str.charAt(str.length-1));

let str1=`'java`;
console.log(str1);

let mesage = `"I'm good". She said"`;
console.log(mesage);
console.log(mesage);

//place variable and expression 
let str2='Lasurkar';
let name = 'John';
let message = `Hi, I'm ${name}.`;
let ans=`Hi,${str2}`;
console.log(ans);

console.log(message);

//escaping character (\) 

let t = 'I\'m a string!';
console.log(t);

//length

let a = "Good Morning!";
console.log(str.length); 

//access
let b = "Hello";
console.log(b[b.length-2]); // "H"

//Concatenating
let n='java';
console.log(n+'Script');

// assemble string line by line

let className = 'btn';
className += ' btn-primary'
className += ' none';

console.log(className);

//convert not string to string 

let status = false;
console.log('-----------');
let conv = status.toString(); // "false"
console.log(conv);
let back = Boolean(conv);
console.log(back); 

// Compare two string
console.log("=======");
let result='a' < 'B';
console.log(result); 


