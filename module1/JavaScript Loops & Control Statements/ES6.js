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





































 