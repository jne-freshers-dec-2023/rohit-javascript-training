let counter = 120;
console.log(typeof(counter));

let a=false;
console.log(typeof(a));

let b=false;
console.log(b); 

//undefine

let c;
console.log(typeof(c));

let obj=null;
console.log(obj==undefined);

//number type 
let m=12.6;
console.log(m);

let n=10.00;
console.log(n);

//range of number type  
console.log("Max value:="+Number.MAX_VALUE);
console.log("Min value:="+Number.MIN_VALUE);

//Nan
console.log('a'/2);

console.log(NaN/2);

console.log(NaN==NaN);

//String 

console.log('Rohit Lasurkar');
console.log("Rohit Lasurkar");

let s1='Java Script';
s1[0]='j'
console.log(s1);

// we cannt modify string 

s1=s1+"By Coder";
console.log(s1);

console.log(Boolean(45));//true
console.log(Boolean('a'));//true
console.log(Boolean());//true
console.log(Boolean(0));//false

//Symbol()

let z=Symbol();
console.log(z);

console.log(Symbol()==Symbol());

//bigint 

let num=267367216667737271n;
console.log(typeof num);

//object 

let person={
    id:1,
    name:"Rohit",
    Age:23
}
console.log(person);

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: [{
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    {
        building: '48748',
        street: 'south 2nd street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
]
}
console.log(contact.address[0].city);