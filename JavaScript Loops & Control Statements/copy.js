// let num1 = parseFloat(prompt('Enter the first number:'));
// let num2 = parseFloat(prompt('Enter the second number:'));
// let operator = prompt('Enter the operator (+, -, *, /):');
// let result;

// switch (operator) {
//   case '+':
//     result = num1 + num2;
//     break;
//   case '-':
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case '/':
//     result = num1 / num2;
//     break;
//   default:
//     console.log('Invalid operator');
// }

// console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);

// // Output3


// let a=10 
//  if (a <= 30){
//     console.log("great ")
//  }

 
 
// function multiply(a, b) {
//    return a * b;
//    }
//    let result = multiply(3, 4);
//    console.log(result);

   // function myFunc(a, ...rest) {
   //    console.log(a);
   //    console.log(rest);
   //    }
   //    myFunc(1, 2, 3, 4);
//    var a=3.7;

// var b=2;

// a=ciel(a)

// document.writeIn(a*b);
// var tensquared = (function(x) {
//    return x*x;}
//    (10));

// var o = new F(); 
// o.constructor === F

// var obj = new Fun(); 
// obj.constructor === Fun 

// function Ticket(from,to,pName){this.from=from; this.to=to; this.pName= pName; } 
//     var ticket=new Ticket( "Udaipur","Pune","Raj" );

// const pt1 = {}; const ob1 = Object.create(pt1); console.log( Object.getPrototypeOf(ob1) === pt1 )

function Person() {
   this.name = "Rahul";
 }
 
 function Obj() {
   Person.call(this);
 }
 
 Obj.prototype = Object.create(Person.prototype);
 const app = new Obj();
 console.log(app.name);


 const prototype1 = {}; const object1 = Object.create(prototype1); console.log(Object.getPrototypeOf(object1) === prototype1); 


















