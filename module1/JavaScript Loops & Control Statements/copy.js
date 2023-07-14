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

// function Person() {
//    this.name = "Rahul";
//  }
 
//  function Obj() {
//    Person.call(this);
//  }
 
//  Obj.prototype = Object.create(Person.prototype);
//  const app = new Obj();
//  console.log(app.name);


//  const prototype1 = {}; const object1 = Object.create(prototype1); console.log(Object.getPrototypeOf(object1) === prototype1); 

// let str1 = "Masai";

// let obj3 ={};

// for(let i =0; i<= str1.length-1; i++){

//     if(obj3[str1[i]] == undefined){
//         obj3[str1[i]] = 1;    //add
//     } else
//     {
//         obj3[str1[i]]++;     //incerment
//     }
// }
// console.log(obj3);



// let name= "nikhil";
// let oj={};

// for (let i =0; i <=name.length-1; i++){
//   if (oj [name[i]]== undefined){
//     oj[name[i]]=1;
//   }
//   else{
//     oj[name[i]]++;
//   }
// }
// console.log(oj);

// let factor=0;
// for(i =1; i<=num; i++){
//     if(num%i== 0){
//         factor++;
//     }
// }

// if(factor==2){
//     console.log("Prime Number");
// }
// else{
//     console.log("Not a Prime Number");
// }


function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 1; i <= 10; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

isPrime();

// printe the prime number from 1 to 10
// let num=[1,2,3,4,5,6,7,8,9,10]
// let bag="";
// for(let i =0; i <= num.length-1; i++){
//   if(num%i==0){
//     bag++;
//   }
//   if (bag==2){
//     console.log(bag,"Prime number")
//   }
//   else{
//     console.log(bag,"not a prime")
//   }
// }
// console.log(bag);

// function Primecheck(num){

//   let factor=0;
//   for(i =1; i<=num; i++){
//       if(num%i== 0){
//           factor++;
//       }
//   }
  
//   if(factor==2){
//       console.log("Prime Number");
//   }
//   else{
//       console.log("Not a Prime Number");
//   }
//   }
//   Primecheck(13);  
//   Primecheck(119); 

// let num =13;
// let count = 0;
// for(i=1; i<=num; i++){
//   if(num%i==0){
//     count++;
//   }
// }
// if(count==2){
//   console.log("yes prime numer");
// }
// else{
//   console.log("not a PN");
// }


// let str ="nikhil";
// let num=3;
// let bag="";
// for(let i=1;i<=num; i++ ){
//   bag+=str+ "";
// }
// console.log(bag);


function checkPrime(num){

let count = 0;

for (i=1; i<= num-1; i++){
  if(num%i==0){
    count++;
  } 
}
if (count==1){
  console.log("Prime Number");
}
else{
  console.log("NOt Prime Number");
}
}

checkPrime(4);









