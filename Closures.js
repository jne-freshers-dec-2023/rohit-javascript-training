var name = 'John';

function greeting() { 
    let message = 'Hi';
    console.log(message + ' '+ name);
}

greeting();

function greeting1() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    sayHi();
}

greeting1();

//Modify greeting function 

function greeting2() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting2();
hi(); // still can access the message variable

//Closures
//below sayHi() and sayHello() are the closures
 
function greeting(message) {
    return function(name){
         return message + ' ' + name;
    }
 }
 let sayHi = greeting('Hi');
 let sayHello = greeting('Hello');
 
 console.log(sayHi('John')); // Hi John
 console.log(sayHello('John')); // Hello John

console.log('----------------------');

// in below loop it print same value 4

//  for (var index = 1; index <= 3; index++) {
//     setTimeout(function () {
//         console.log('after ' + index + ' second(s):' + index);
//     }, index * 1000);
// }

//you need to create a new closure scope in each iteration of the loop.

// 1)Using the IIFE solution
// 2) let keyword

for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}

for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}


