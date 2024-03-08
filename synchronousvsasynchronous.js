//Synchronous
console.log("first");
console.log("second");
console.log("third");

//Asynchronous
console.log("--------------");
console.log('First');

// Set timeout for 2 seconds
setTimeout(() => console.log('Second'), 2000);

console.log('Third');
