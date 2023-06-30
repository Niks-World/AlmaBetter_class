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
 
// other way to get last index
let last_index = train_name.length -1;     // - from last u can put 123

 console.log(train_name[last_index]); // o/p shatabdi

 // if i want to add sum number like 99

 train_name.push(99,100,150);  // push will to add in value
 
 console.log(train_name); //  now its add in it and print will come all togater


// If i want to remove something from end of ant array ==> pop

let arr= [1,2,3,4,5,6,7];

arr.pop()               // it will remove from end (7) , its only remove from end
arr.pop()              //  it will again remove from last(6) will remove  
arr.pop()             // again will remove from last (5)
console.log(arr)  
// o/p- [1 , 2 , 3 , 4]


// now make a empty array and add some number and remove some show what will  be out put

let arr1 = [] ; // this is empty array

arr1.push(12);                  // add in empty arry[12]
arr1.push(10,10,10);           //add [12 10 10 10]
arr1.pop();                    // -1 from last [12 10 10 ]
arr1.push(123);                //[12 10 10 123]
arr1.pop();                   //-1 [12 10 10 ]
arr1.pop();                  //-1 [12 10]
arr1.push(12,45);             // add [12 10 12 45]
arr1.pop();                 // -1 [12 10 12]

console.log(arr1);     // o/p - [12 10 12]
