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