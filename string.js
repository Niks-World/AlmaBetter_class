 /* STRING */

// Count the how many character are there

let sen ="My name is Tony Strak"; // => 21

console.log(sen.length)
// o/p=> 21

// print the later (u) form value

         //01234.678910 (. is 5) 
let sen1= "Bruce Wayne" //11 (it also have index no)

console.log(sen1[2]);

// o/p => u (if we want w than put [6] in array)

console.log(sen1[6]); // o/p => is W

/* Q. why do we need length in propert in string? */

let pass ="123abc";   // this is less than 8 length so out is less than

if(pass.length >=8 ){
    console.log("Account Created");
}
else{
    console.log
    ("Password length is less than 8");
}

// o/p ==> Password length is less than 8


// Q. print all charctr in a new line

let string ="Clark kent";


// console.log(string[0]);       //c
// console.log(string[1]);      // l
// console.log(string[2]);     //a
// console.log(string[3]);     //r
// console.log(string[4]);    //k
// console.log(string[5]);    // space 
// console.log(string[6]);   // k


// this is very log process 
// we can use for loop insted

for(let i = 0;  i <= string.length -1; i++){

    console.log(string[i]);
}
// now o/p is same c / l /a/ r/k in one line 

//    Array Vs. Strings

//Q. how do you update /replace something in arrays?

let arr =[1, 2, 3, 4, 5, 6, 7, 8];

arr[4]=100;      // it will remove index of 5 and put 100
console.log(arr);

/* o/p => [1, 2, 3, 4,
          100, 6, 7, 8 ]/*/

//Q. how do you update /replace something in Strings?


let str = "Ronaldo";
// we have to put "D" ==> "Donaldo"

        str[0] == "D";
       // we cannot change a string driectly.
       // String is immutable
    
 console.log(str[0]);

 // step 1 : convert string into array 

 let str1 = "Ronaldo";

 let arr1 = [];

 for (let i = 0; i <= str.length -1; i++){
    arr1.push(str[i]);
 }
   // now its in array 

 // step 2 : Replace "R" with "D"

 arr1[0]= "D";  // now its replace with D
 
 // step : convert array to string print array in single line

 let bag = "";

for (let j = 0; j <= arr1.length - 1; j++) {

  bag += arr1[j];
}
console.log(bag);
// o/p => Donaldo

// ## other way 

let str2="Ronaldo";

let new_str="";

for (let i=0; i <=str2.length -1; i++){
    if (str2[i] == "R"){
        new_str += "D";
    }
    else{
        new_str += str2[i];
    }
}
console.log(new_str);
// o/p => Donaldo

//--------------------------------------------------------------

// Add a new character at the end of a string
// Add "R" at the end of string "str3"

let str3 = "CHutiya";

console.log(str3 +"R"); // this at last
// if in front 
console.log("Gandu " + str3 );

//-----------------------------------------------------------

/* if you want to change anything at the string or you want to 
 genrate a new string ==> CONCATENATION*/


 /* Print the charcater present at index number 2
  each string in a line */

  let arr3=["Aman","Rahul","Chummu","Shweta","Sanchi","Shivansh"];

  console.log(arr3[0][2]); //m
  console.log(arr3[1][2]); //h
  console.log(arr3[2][2]); //u
  console.log(arr3[3][2]);  //w

  /* but this very long process we can use 
    for loop */

for( let i=0; i <= arr3.length -1; i++){
    console.log(arr3[i][2]);
}
// o/p => m h u w n i







