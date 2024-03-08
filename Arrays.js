//create array using array constructor 
let arr=new Array(2,3,4,4,4,1,21,);
console.log(arr[0]);

//create array using literal notation

let arr1=['red','blue','black'];
console.log(arr1[1]);

let arr3=[];
console.log(arr3);

//access element of array
let mountains1 = ['Everest', 'Fuji', 'Nanga Parbat'];

console.log(mountains1[0]); // 'Everest'
console.log(mountains1[1]); // 'Fuji'
console.log(mountains1[2]); // 'Nanga Parbat'


let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
mountains[2] = 'K2';

console.log(mountains);

//length of array 
let a=[2,4,5,6,7,8,9];
console.log(a.length);

//add element at the end of array

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');

console.log(seas);
 

//add element at the begining of array

let seas1 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas1.unshift('Red Sea');

console.log(seas1);

//remove element at the end of array

let seas2 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const lastElement = seas2.pop();
console.log(lastElement);
 
//Removing an element from the beginning of an array
let seas3 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seas3.shift();

console.log(firstElement);

//indexOf() find the index of element of array
let seas4 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas4.indexOf('North Sea');

console.log(index); // 2
console.log(Array.isArray(seas4));