//        FUNCTION 1

let a= 10 ;
let b = 23;

console.log("additional of ", a+b);  // 33

let x=10;
let y = 20;

console.log("Subtract of ", x-y );  //10

// In these case JavaScript goes line by line

// Q.1 I want to perfome addittion and subtract 

function sum(){    // this part is called declaration of function

let  ab= 10;
let bc= 30;

console.log("addition of",ab+bc);
}

function subtract(){  
    let xy=50;
    let zy= 35;

    console.log("subtarct of",xy-zy);
}
// now no out put will show why ?
// In function we need to call the function  
//this is calling function
sum();                       // addition of 40
subtract()                  //subtarct of 15   this is how function work


/* Q2. Write 4 function to perform addition, subtract, multiplication and dividion of two number.     */

function sum(){

    let xx= 50;
    let yy=32;
    console.log("adding",xx+yy);
}
function sub(){
    let ss=100;
    let cc=80;
    console.log("sub of",ss-cc);
}
function multi(){
    let gg=10;
    let kk=5;
    console.log("multip of",gg*kk);

}
function dividion(){
    let ll=60;
    let rr=6;
    console.log("dividion",ll/rr);
}
sum();             // adding 82
sub();            //sub of 20
multi();         //multip of 50
dividion();     //dividion 10

// Q3. print HelloWorld! 5 times

function print(){
    for(let i=1; i<=5; i++){
    console.log("Hello World!");
    }
}
print()  // 5 time helloWorld!

// how

function add(a,b){
    console.log(a+b);
}

add(10,10);  // 20
add(10,5);    // 15
add(-9,-8);    //17
add(8,10);     //18
add(14,14)     //28

//Q4. check if the number is even or odd while using a function

function even(num){

  if(num%2==0){
      console.log("even number");
}
  else{
      console.log("odd number");
}
}
// We can put any number to check it even or odd number 
even(15);    //odd 
even(5);    // odd
even(6);    //even
even(18);  // even

//Q5. check if the number is Prime or not using a Function (prime or factor number means = jo khud se ya 1 se katye )

function Primecheck(num){

let factor=0;
for(i =1; i<=num; i++){
    if(num%i== 0){
        factor++;
    }
}

if(factor==2){
    console.log("Prime Number");
}
else{
    console.log("Not a Prime Number");
}
}
Primecheck(18);    // Not a prime number   ye 2 se kat jaye ga
Primecheck(23);    // Prime number because ye khud se or 1 se cut ta hai