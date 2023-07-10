// FUNCTION 2

/*Q1. write the function check if the number is even or odd,
return true if number is even or false if the number is odd.     */

function checknum(num){

     if(num % 2 ==0){
     return true;
      }
     else{
     return false;
     }
}
 let ans= checknum(16);   // U can put any number here to check the number is odd or even

 console.log(ans);

/* Q2. using the above function , count even nmbers between 1 and 15  */

function checknum(num){
    if (num %2 == 0){
        return true;
    }
    else{
        return false;
    }
}
let count=0;

for(let i=1; i<=15; i++){
    let ans = checknum(i);
    if(ans == true){
        count++
    }
}
console.log(count);  
// o/p => 7

/*Q3. using the above function, print all the odd number between 1 and 15 */

function checkodd(num){

    if(num%2 ==0){
        return true;
    }
    else{
        return false;
    }
}

for(let i =1; i<=15;i++){
    let ans = checkodd(i);
    if(ans == false){
        console.log(i, "is odd number");
    }
}
/* Out  put is 
1 is odd number
3 is odd number
5 is odd number
7 is odd number
9 is odd number
11 is odd number
13 is odd number
15 is odd number
  To get output in horizonal form */
let jhola=""; 
  for(let i =1; i<=15;i++){
    let ans = checkodd(i);
    if(ans == false){
        jhola +=i +" ";     // Concatenation 
    }
}
console.log(jhola);
// O/P => 1 3 5 7 9 13 15

//Q4.  write a function to reverse a string (BATMAN => NAMTAB)
 
let string = "BATMAN";
let new_str="";

for (i=string.length-1; i>=0; i--){
    new_str +=string[i];
}
console.log(new_str);
// O/P => NAMTAB  BUT we want in function 

function reverse(str){
    let str1="";      // we take the blank bag.
    for(i=str.length-1;i>=0; i--){
        str1 += str[i];  // Concatenation

    }
    return str1;  // returning the new value
}
let ans2=  reverse("AMARDEEP");  // U can put any input to check 
console.log(ans2)
// o/p => PEEDRAMA

//Q5. using the above function, check if string is Palindrome or not.
// palindrome means same from both side like(nitin = nitin , naman = naman )

let s = "nitin";

function reverse(string1){

    let nw_str="";

    for(let i =string1.length-1; i>=0; i--){
        nw_str += string1[i];    //Concatenation
    }
    return nw_str;
}
let rev1 = reverse(s);

if (s === rev1){
    console.log(s, "is a Parlidrome string")
}
else{
    console.log("Not a Pralidrome string");
}
// o/p => nitin is a Parlidrome string 

// IN BUILT FUNCTION OF JAVASCRIPT

//1 typeof()
let x="aman";
console.log(typeof(x));
// o/p => string

//2 Number()  => string to number 
let z="23";    //now its a string 

let num=Number (z);  // we can only convet string number to numaric
console.log(typeof(num));  // now its converted to number

//3 .toString() => number to srting
let g =44; // number 
let srt6=g.toString()    //  here its convertin with in bulid function 
console.log(typeof(srt6)); // now is converted in (string)

//4 .shift() => remove from strting 

//    ARRAY 

let arr=[1,2,3,4,5,6];

arr.shift()
console.log(arr);  // [ 2, 3, 4, 5, 6 ]

//5 .unshift() => add number in starting 
let arr2=[1,2,3,4,5,6];
arr2.unshift(22,99)
console.log(arr2);
/* o/p => [
  22, 99, 1, 2,
   3,  4, 5, 6
]*/

//6 .push() => add number in last 
let arr1=[1,2,3,4,5,6];
arr1.push(55,44,100);
console.log(arr1);
/* o/p [
  1,  2,  3,   4, 5,
  6, 55, 44, 100
] */

//7 join() => join the array in horzontal way , in a singl line 


let arr3=[1,2,3,4,5,6];

console.log(arr3.join(" $ "))  //  concatination  // anything U want to join with 
// o/p => 1 $ 2 $ 3 $ 4 $ 5 $ 6

//8 indexOf() => give U the output of index number which is present in side the array alway give from starting 

let arr4=[1,2,3,4,5,6,2,5,4,1,6];
console.log(arr4.indexOf(6)); // giving me o/p of index number 5

//9 lastIndexOf() => it give out from last index side 

let arr5=[1,2,3,4,5,6,2,5,4,1,6];
console.log(arr5.lastIndexOf(4));  //8 there are 2 times 4 present there but it is giveing me the output from last one 

//    STRING
//10 .toUpperCase() => it will convert string from lower to UPPER CASE

let string2= "aman";
console.log(string2.toUpperCase()); // o/p => AMAN

//11 .toLowerCase => it will convert from UPPER TO lowerCase

let string5= "PULKIT SIR MASAI"
 console.log(string5.toLowerCase());  //o/p=> pulkit sir masai

//12 .includes() => it will check the word is there or not if word is present than 0/p is (true) if not than (false) 

const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.includes("fox"));  // o/p => true

let isPresent = sentence.includes("bull");

isPresent ? console.log("It IS Pesent ") : console.log("Not Present");
// now my o/p =>  Not Present

//13  .startWith() => it will check the word is persent in starting or not if yes than (true) else (false)

const str7= "Saturday night planes";

console.log(str7.startsWith("Sat")); //sat => false because case senstive but when i put Sat than true will be o/p

//14 .endWith() => it will check the last word or index value and if match than true else false 

const str8= "Saturday night planes";

console.log(str8.endsWith("nes"));  // true at the last of my word is nes so true.

//     MATHAMECAL BUILT IN FUNCTION

//15  Math.log10() => The Math. loglO() function returns the base 1O logarithm of a number. 
const yx= 32;
console.log(Math.log10(yx));  // o/p => 1.505149978319906

//16 Math.log2()  => retun base log2 number from math
 
const yz=35;
console.log(Math.log2(yz));  // 5.129283016944966

//17 Math.floor => it will give me lower nearst vale 

const zz=32.582;
console.log(Math.floor(zz));  // o/p =>32 but when i use ceil function

//18 Math.ceil => it will give me higher nearest value 
const zz1=32.582;
console.log(Math.ceil(zz1));  // o/p=> 33 its is nearest higher value 

//19 Math.sqrt() => square root  of any number it will give 
const sqr= 4;
console.log(Math.sqrt(sqr)); // this sqare root of 4 is 2

//20 .splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1,0, 'Feb');
// Inserts at index 1
console.log(months);

//21 .slice() -1 from the last method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

//22 .split() => add string wuth any input
let srt9= "1 2 3 Aman";
console.log(srt9.split(" ")) // o/p=> [ '1', '2', '3', 'Aman' ] comes in array 

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

// Quiz 

//Q1 join() function

let arr6= [1,2,3,"aman"];
console.log(arr6.join(" $ ")); // o/p is 1 $ 2 $ 3 $ aman i can put thing what every want to apply while joining the charetaer





























