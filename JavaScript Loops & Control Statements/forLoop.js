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


 // write a code to printe number from 10 to 1

 for (let c =10; c>=1; c--){
    console.log(c)
 }
 // o/p 10 9 8 7 6 5 4 3 2 1 

 // print number from 10 to 1 in horizontal

 let bag= ""; 

 for (let x= 10; x >= 1; x--){
    bag+= x + " ";   //" " will add space in between
 }
 console.log(bag);
 // o/p- 10 9 8 7 6 5 4 3 2 1 in horiznatl

 // print odd number between 1 and 20 in a horizontal line

 // getting odd numbr ==> done
 // printing them ==> done
 // horizontally ==> done

 for (let a = 1; a <= 20; a++){
    if (a %  2 == 1){
        console.log(a)
    }
 }
 // 1 3  5 7 9 11 13 15 17 19

 //how to print horizontal 

 let horiznatl="";
 for (let s=1 ; s <= 20; s++){
    if(s %2 == 1){
        horiznatl += s + " ";  //" " add space in between output
    }
 }
console.log(horiznatl)
// now the out put is horizontal 

// Print number from 1 to 5

let sun = 0;
for(let v = 1; v <= 5; v++){
    sun = sun +v; // string = number = string 
}
console.log(sun)    // '''' + 1 => "1"
                   // "1" + 2 +>"11"  // "12" + 3 => "123"  // "123" +4 =>"1234"
//output 15 but we want 1 to 5

let san = "";
for(let v = 1; v <= 5; v++){
    san = san +v; // string = number = string 
}
console.log(san) 

//now out put is 123455

// i want following output
// 1-*2-*3-*4-*

console.log("1-*2-*3-*4-*")  // this is not the write way

let ana = "";
for( let b = 1; b <= 4; b++ ){
    ana = ana +b + "-*";
}
console.log(ana)
// o/p - 1-*2-*3-*4-* this is the write way.


// print the sum of those number that are divisble by 2 or 5 between
// a range of 1 and 15

let sam =0;
 for (let l = 1; l <= 15; l++){

    if (l % 2 == 0 || l % 5 == 0){  // 2+4+5+6+8+10+12+14+15 (diviedby)
        sam += l;
    }
 }
 console.log(sam)
 // o/p 76 

 console.log(2+4+5+6+8+10+12+14+15) // this just for adding 
 


