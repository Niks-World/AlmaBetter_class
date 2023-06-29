//for (initialization; condition; increment/decrement) {
    // code to be executed }


// Here's an example of a for-loop that iterates over an array of numbers and logs each one to the console:

const number = [1,2,3,4,5];

for (let i =0; i< number.length; i++){
    console.log(number[i]);
}
 
//output 1,2,3,4,5
// Q 1. Display a Text Five Times

for (let i = 0; i < 5; i++){
    console.log("Hello World");
}

// output five time hello world

// Q 2.  To Display Numbers from 1 to 5 

for (let i = 1; i <= 5; i++){
    console.log(i);
}
//output 12345

// Infinite for loop

//An infinite loop using a for loop:

// infinite for loop
/* for (;;) {
    console.log("This loop will run indefinitely!");
  } */

//out put will be infinte

// Here's the syntax for the for...in loop:

// for (let variable in Object){
//   code to be executed for each value in iterable
// }

let person ={
    name : "leena",
    age : 24,
    city : "kolkata"
};

for (let key in person ){
    console.log(`${key}: ${person[key]}`)
}
// output name: leena age: 24 city: kolkata

// Write a program in JavaScript to display the sum of n natural numbers.

function sumofNaturalNumber(n){
    let sum =0;
    for (let i = 1; i <= n;  i++ ){
        sum += i ;
    }
    return sum;
}

// Here's an example of a for...of loop:

const array =[1,2, 3,4,5];
for (let number of array){
    console.log(number);
}
// output 12345

// Example 1: To display Numbers from 1 to 5

// let i =1;
// while (i <=5 ){
//     console.log(i);
//     i++;
// }
// output 12345

// Example 2: Sum of Positive Numbers Only

const Numbers =[5,-2,10,0,-3,8,-1];

let sum =0;

let i = 0;

while (i< number.length){
    if(number[i] > 0){
        sum += number[i];
    }
    i++;
}
console.log(`The sum of positive number is ${sum}`)
//output 15


// // array of numbers
// const numbers = [5, -2, 10, 0, -3, 8, -1];

// // variable to store the sum
// let sum = 0;

// // index variable for the while loop
// let i = 0;

// // Using a while loop, iterate through the array and add any positive numbers to the sum
// while (i < numbers.length) {
//   if (numbers[i] > 0) {
//     sum += numbers[i];
//   }
//   i++;
// }

// // print the sum of positive numbers
// console.log(`The sum of positive numbers is ${sum}`);
// output 23

// Here's the syntax for the do...while loop in JavaScript:
// Example 1: To display Numbers from 1 to 5

let r = 1;

do {
    console.log(r);
    r++;
}
while ( r < 5) ;
//out put 12345

//break Statement
// 1 to 5  break with for Loop

 for (let z = 1; z <= 10; z++){
    if (z === 5 ){
        break;
    }
    console.log(z);
 }
 //12345

 //continue Statement
 