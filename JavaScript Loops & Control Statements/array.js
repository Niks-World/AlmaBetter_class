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



// print the the all array in line by line useing index

let arr2 = ["Aman", "Bruce", "Clark","Tony","Steeve","Chunnu"];

console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4]);
console.log(arr2[5]);

// output will come line by line but if index is 1000 times than 
// there is other way to print using for loop 

for (let index = 0; index <= 5; index++){
    console.log(arr2[index]);
}
// output will be line by line using for loop

// we also can use while loop 

let inside = 0;
while(inside <= 5){
    console.log(arr2[inside]);
    inside++
}
 // this will also give me the same out put 


 // Spread Operato(...)  ==> coping the elements of array
 // it add arry in any array denoted by 3 dot(...)

 //exaple

 let arr4 = [1,2,3,4];

 let arr5= [...arr4];
 console.log(arr5)
 // o/p- [1234] but i dont give any array to arr5 

 // other exaple

 let arr6 = [1,2,3];

 let arr7= [4,5,6];

 let details = ["Aman","Ronak","Delhi",...arr6, ...arr7, 44,55,66];

 console.log(details);
 // o/p - [aman ronak deelhi 1 2 3 4 5 6 44 55 66 ]


// if you want to replace the array value for the index and 
// insted of that add anything string or number
// make a array and change the position of it with any name or number

let arr8 = [1, 2, 3, 4];

arr8[2]= "Superman";     // index number of arry 

arr8[3]= 1000;

console.log(arr8)  //o/p- 1 2 superman  1000


// Q. print all the moive except Ghajni and Pushpa

let arr9 = ["BATMAN", "RRR", "PUSHPA", "AVANGERS","GHAJNI",
"BLACK PANTHER","KGF2"];

// print the all movie 

for(let m= 0; m <= arr9.length -1; m++){    // .length -1 will remove from last BUT now it will show if we add more value than it 
//even if you add any moive after the first print

if(arr9[m] == "PUSHPA"){          //this moive name will be remove from the list
    continue;
}
if (arr9[m] == "GHAJNI"){     // this will also get remove
    continue; 
}  
    console.log(arr9[m])
}
//output - BATMAN RRR AVANGERS BLACK PANTHER KGF2

// there is other way to remove the name by using ( || or) gate . lets see

let arr10 = ["BATMAN", "RRR", "PUSHPA", "AVANGERS","GHAJNI",
"BLACK PANTHER","KGF2"];{

    for (let i = 0; i<= arr10.length -1; i++){
        if(arr10[i] === "PUSHPA" || arr9[i] === "GHAJNI") {    // or gate ( ||) either the elemt equal to value or == to the value
            continue;  // skip 
        }
        console.log(arr10[i])
    }
}
// output - BATMAN RRR AVANGERS BLACK PANTHER KGF2


//find the maxium number in array

let arr11= [10, 30, 5, 50, 45];

let notebook=0;

for (ii =0; ii<=arr11.length -1; ii++ ){

    if(arr11[ii] > notebook){

        notebook = arr11[ii];
    }
}
console.log(notebook);
// o/p => 50


//find the minmum number in array

let arr12 = [-2, -7 , -1, -3, -4];

let notebokk= Infinity;  // Infinty for ( min negtive ) 
// -Infinity for maxium negavtive

for (i=0; i <=arr12.length -1; i++){
    if(arr12[i] < notebokk){
        notebokk =arr12[i];
    }
}
console.log(notebokk);
// o/p => -7 because -1 -2 -3 -4 -5 -6 -7 so  7 is max negative 

 
