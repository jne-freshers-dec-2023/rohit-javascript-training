//Global Scope
var globalVal = 10;

function test1() {
  console.log("Printing gloablVal",globalVal);
}

test1();

//Function Scope

function test2(){
  var a = 10;
  console.log("Value of 'a' inside funuction", a);
 }
 console.log("=========");
 test2();
 console.log("=========");
 try{
     console.log("Triyng  to access 'a' defined in function ")
     console.log(a); 
 }catch(e){
     console.log(e.message); 
 }

 //Block Scope

 function test() {
  {
    let a = 10;
    const b = 5;
  }
  
  try{
    console.log("We will get error when we try to access a  b")
    console.log(a, b);// error will be thrown here 
  } catch(e) {
    console.log(e.message);
  }
}
test();

//Hosting 
//Allowed in var only (Not in let and const)
x=10;

console.log(x);

var x;

//Reassigning

var m=10;
m=90;
console.log(m);

let n=10;
n=89;
console.log(n);

const o=32;
// o=78;
console.log(o);

//Redeclaration
console.log("----------------");
var temp=25;
var temp=90;
console.log(temp);