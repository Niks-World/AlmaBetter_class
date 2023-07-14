/*  ECMA 6
European Computer Manufacturers Association
(1) spread oprator
(2) rest oprator
(3) ternary oprator
(4) HOF => higher Order function 
(5) Arrow function 
(6) let , const , var 

*/ 

//1 spread operator ==> Coping one array inside another array

let arr=[3 , 4 ,5 ,6];
let arr2=[ 1,2,3,4,5, ...arr,7,8,9,];

console.log(arr2);

/*[ output will same as array 
  1, 2, 3, 4, 5,
  3, 4, 5, 6, 7,
  8, 9
] */

let arr3=[...arr2, ...arr, ...arr,...arr2];
console.log(arr3);

/*[ output will accoding to my instruction 
  1, 2, 3, 4, 5, 3, 4, 5, 6,
  7, 8, 9, 3, 4, 5, 6, 3, 4,
  5, 6, 1, 2, 3, 4, 5, 3, 4,
  5, 6, 7, 8, 9
] */

let obj= {
    name:"chunnu",
    age:67
};
let obj2 ={
    ...obj,
    phone:"98764531"
};
let obj3={
    ...obj,
    ...obj2
};
console.log(obj3);

// { name: 'chunnu', age: 67, phone: '98764531' } 
// if there is key than it will gey update if not than added 

// rest Operator 

function product (...x){
    let pro=1;
    for(let i=0; i<=x.length -1; i++){
        pro *=x[i];
    }
    console.log(pro);
    //o/p=> 4702924800
}

product(1,2,3,4,5,6,7,8,9,6,3,4,5,6,1,2,3);

//print using HOF smart way  map(retern array ) filter (no need here) ican use forEach
product1(1,2,3,4,5,6,7,8,9,6,3,4,5,6,1,2,3);

function product1(...x){
    let pro1 =1;
    x.forEach(function(element, index) {
        pro1 *= element;
    });
    console.log(pro1);
} // op=> 4702924800    same out put 

//Q
function print(...x){
    console.log(x);
}
print("AMan", "Chunnu", "Bruce","Clark","Munnu");
// op=> [ 'AMan', 'Chunnu', 'Bruce', 'Clark', 'Munnu' ]
// Rest oprator convert string into array 

// Q4 to filter out elements greater than >=6
// op=> like this [6,7 , 8 ]

let arr4= [2,3,4,5,6,7,8,9,1,2];
let bag=[];
 for(let i=0; i<=arr4.length-1; i++){
    if(arr4[i]>= 6){
        bag+=arr4[i] + " ";
    }
 }
 console.log(bag); //6 7 8 9 
 
 // useing HOF filter
 let arr5= [2,3,4,5,6,7,8,9,1,2];

 let new_array= arr5.filter(function(element, index){
    return element >=6;
 });
console.log(new_array);  //[ 6, 7, 8, 9 ] this is correct output 

// Q5 to filter out elements greater than >=6
// and also calculate the sum  o/p=> 30

let arr6= [2,3,4,5,6,7,8,9,1,2];

 let new_array1= arr5.filter(function(element, index){
    return element >=6;
 });

let sum=0;
new_array1.forEach(function(element,index){  //add function in side function 
    sum += element
});

console.log(sum); //  [6 + 7+ 8 + 9] => 30

// ternary operator 

/*Q7. Rahul want to supermarket to get some groceries, there is 
a deal , if he spent more than or equal to 5000, he we get a discount of 20%,
print the discounted price, if he gets a discount */
 
let bill =6000;
// this is traditonal way 
if (bill >= 5000){
    let new_bill= bill - (0.20 *bill);
    console.log(new_bill);
}
else{
    console.log("NA");
} //op=> 4800     (20% of 6000 is 1200)

// ternay style

bill>= 5000 ? console.log(bill- (0.20 *bill)) : console.log("NA")
// op=> 4800

//Q8 find the greastest number using ternary 

let a =10;
let b=34;
let c =8 ;
// ternary style
a > b && a > c ? console.log(a,"a is great"):b > c && b > a  ? console.log(b,"b is great") : console.log(c,"c is great");
//34 b is great

// traditonal way
if(a > b && a > c){
    console.log(a,"a is great");
}
else if (b > a && b > c ){
    console.log(b,"b is great");
}
else{
    console.log(c,"c is great");
}
// 34 b is great same output (tarnary make smart and simple)

// Arrow Functions

let sum1 = (a,b) => {        // => arrow function 
    console.log(a + b);
}
sum1(10, 40)    // calling the function 
// op=> 50

//Q1 write a function to calculate the sum of all even numbers of the array
// add the all even number
let arr7= [1,2,3,4,5,6];

let sum4=0;
for(let i=0; i<=arr7.length-1 ; i++){
    if(arr7[i] % 2 == 0){
        sum4 += arr7[i];
    }
}
console.log(sum4); //op => 12

//let try with function than with arrow function 

function addition (...a){
    let sum = 0;

    a.forEach(function(element,index){
        if(element %2 == 0){ // i can also use ternay here 
            sum+= element;    // element %2 ==0 ? sum+=element: ""; 
                              //(in ternay alway need else so use "" blank Qute)
        }
    });
    console.log(sum);
}
addition(1,2,3,4,5,6);
// op=> same 12

// let's try with arrow function 

let addition1= (...nik) => {

    let sum = 0;

    nik.forEach((element,index) => {  // arrow inside arrow

     element % 2== 0 ? sum+=element : ""; // ternary oprator

    });
    console.log(sum);
}
addition1(1,2,3,4,5,6);
// same out put => 12
























 