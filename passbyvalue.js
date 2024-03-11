function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);

console.log(result); // 100 
console.log(y); // 10 -- no change


let person = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge(obj) {
    obj.age += 1;
  }
  
  increaseAge(person);
  
  console.log(person);


  let person1 = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge(obj) {
    obj.age += 1;
  
    // reference another object
    obj = { name: 'Jane', age: 22 };
  }
  
  increaseAge(person1);
  
  console.log(person1);
  
  