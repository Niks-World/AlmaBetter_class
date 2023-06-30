// JavaScript Array

const words = ['hello', 'world', 'almabetter'];

console.log(words)

let fruits = ['apple', 'banana', 'orange'];

// arrays, functions, and other objects

let myArry =[
    1,"Hello",true,[2,4,6],
    {
        name:"jhon",
        age:30
    },
    function(){
        console.log("this is a function inside an array");
    }
];
console.log(myArry[5]);

// declare an arry containing the name of your fav movie and than print it

let myfav_movie = ["Rockstar","Ajawani hai dewani","Tamasha","Iron man","Man in black"]

console.log(myfav_movie);

// print the number from array

let number =[1,2,4,6,7,11,21];

console.log(number[2]);       //  this will count the index
console.log(number[7-1])     // from total lenght -1 is count from last 
console.log(number.length)  // this will you total lenght

// o/p- 4 
// 21 
// 7

// print the train name 
// how many train are there
// print the last name of train 

let train_name =["Rajdhani Expresss","Duronto","Channai Exprees",
                  "Gareeb Rath","Shatabdi"];

console.log(train_name.length);       //length of train is 5

console.log(train_name[5-1]);     // priting the last train name (satabdi)