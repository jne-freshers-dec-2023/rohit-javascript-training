let persons = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    }
};

console.log(persons.greet);

let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Hello, World!');
    }
};

person1.greet();

//you can access property using this value

let person2 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(person2.getFullName());

//Constructor Function

let person4 = {
    firstName: 'John',
    lastName: 'Doe'
};

//Define Constructor function

function Person4(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let person5=new Person4('Jame','Doe');

//Adding Method to the Constructor Function

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}
//here you create new person object and inoke getFillName method
let person6=new Person('Rohit','Lasurkar');
console.log(person6.getFullName());

//calling constructor without new key word call like normal function 
let person7 = Person('John','Doe');
//console.log(person7.firstName); //error 

//ES6 introduce new.target property to avoid above error

function Person1(firstName, lastName) {
    console.log(new.target);

    this.firstName = firstName;
    this.lastName  = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person8=new Person1('Rohit','Lasurkar');
console.log(person8);

//Following Function Return undefine because it call like normal function
let person9=new Person1('Rohit','Lasurkar');
console.log(person9);

//new.target, you can force the callers of the constructor function to use the new keyword. Otherwise, you can throw an error like this

function Person3(firstName, lastName) {
    if (!new.target) {
        throw Error("Cannot be called without the new keyword");
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

function Person4(firstName, lastName) {
    if (!new.target) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

let person10 = Person4("John", "Doe");

console.log(person10.firstName);

//create construtor function 
function Person5(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person5.prototype.getFullName = function()
{
    return this.firstName +''+this.lastName;
}

let p1=new Person5('Rohit','Lasurkar');
let p2=new Person5('Rohit','lasurkar');
console.log(p1.getFullName());
console.log(p2.getFullName());

// class keyword that makes the constructor/prototype pattern easier to use
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

let p3 = new Person('John', 'Doe');
let p4 = new Person('Jane', 'Doe');

console.log(p3.getFullName());
console.log(p4.getFullName());

// prototypal inheritance and __proto__
console.log("==prototypal inheritance and __proto_==");
let person12 = {
    name: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};

console.log(person12.toString());

// to access the property of person object used __proto__
console.log(person12.__proto__);

// referce the same object 
console.log(person12.__proto__ === Object.prototype); // true

let teacher = {
    teach: function (subject) {
        return "I can teach " + subject;
    }
};

// if you want the teacher object to access all methods and properties of the person object, 
// you can set the prototype of teacher object to the person object like this:

teacher.__proto__ = person12;

console.log(teacher.name);
console.log(teacher.greet());

// object.cretate is used to create new object 
Object.create(proto, [propertiesObject]);

let person = {
    name: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};

//create empty teacher object
let teacher = Object.create(person);

//after assign value to teacher object

teacher.name = 'Jane Doe';
teacher.teach = function (subject) {
        return "I can teach " + subject;
}

// you can do all of these steps in one statement 

let teacher = Object.create(person, {
    name: { value: 'John Doe' } ,
    teach: { value: function(subject) {
        return "I can teach " + subject;
    }}
});

console.log(Object.getPrototypeOf(teacher) === person);

//this keyword

let counter = {
    count: 0,
    next: function () {
      return ++this.count;
    },
  };
  
 console.log(counter.next());

 //Simple function invocation
 
 function show() {
    console.log(this === window); // true
 }
 
//  show();

//  calling show function same as 
 window.show();

 //in strict mode JavaScript sets the this inside a function to undefined

 "use strict";

function show() {
    console.log(this === undefined);
}

show();

function show() {
    "use strict";
    console.log(this === undefined); // true

    function display() {
        console.log(this === undefined); // true
    }
    display();
}

show();

let car1 = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

console.log(car1.getBrand()); // Honda

let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

let bike = {
    brand: 'Harley Davidson'
}

//bind method set this to bike object
let brand = car.getBrand.bind(bike);
console.log(brand());

//Constructor invocation

function Car1(brand) {
    this.brand = brand;
}

Car1.prototype.getBrand = function () {
    return this.brand;
}

let car2 = new Car1('Honda');
console.log(car2.getBrand());

function Car(brand) {
    if (!new.target) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}

//indirect invocation

function getBrand(prefix) {
    console.log(prefix + this.brand);
}

let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");

getBrand.apply(honda, ["It's a "]); // "It's a Honda"
getBrand.apply(audi, ["It's an "]); // "It's a Audi"

function Car4() {
    this.speed = 120;
  }
  
  Car4.prototype.getSpeed = () => {
    return this.speed;
  };
  
  var car4 = new Car4();
  console.log(car4.getSpeed()); // 👉 undefined




