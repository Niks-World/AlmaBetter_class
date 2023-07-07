//     OBJECT 2

let obj = {
    name: "NIK",
    age:24,
    location: "Delhi"
};

let obj1={ ...obj,  // using (...) Sprade method
Hobbies:["coding","gaming"]};
console.log(obj1)

// Q1.GIVEN a string print, the number of times each charecter apears.

let str ="Masai";

let obj2={};

for (i =0; i <= str.length-1; i++){
    let key = str[i];
    obj2[key]= 1;
}
console.log(obj2);
// o/p => { M: 1, a: 1, s: 1, i: 1 } but this is wrong o/p

let str1 = "Masai";

let obj3 ={};

for(let i =0; i<= str1.length-1; i++){

    if(obj3[str1[i]] == undefined){
        obj3[str1[i]] = 1;    //add
    } else
    {
        obj3[str1[i]]++;     //incerment
    }
}
console.log(obj3);
// o/p=> { M: 1, a: 2, s: 1, i: 1 } now the right ans

/* Q2. what is the frequency of each element ?
(number of times something is appearing )  */
// let arr = [7, 2, 7, 7, 3, 4,2];

let arr = [7, 2, 7, 7, 3, 4,2];
var oj={};

for (let i =0; i<= arr.length-1; i++){
    
    if(oj[arr[i]] == undefined){
        oj[arr[i]]=1;
    }
    else{
        oj[arr[i]]++;
    }
}
console.log(oj);
// o/p => { '2': 2, '3': 1, '4': 1, '7': 3 } right answer

/*Q3. find the sum of elements whose occ. is 2 or more than 2. */// occ= occurens means 1 word repated

let arr1 =[7, 2, 7, 7, 3, 4 , 2 ];

let ojj = {};

for(let i=0; i<=arr1.length-1; i++){

    if(ojj[arr1[i]]== undefined){
        ojj[arr1[i]]=1;
    }
    else{
        ojj[arr1[i]]++;
    }
}
// console.log(ojj); { '2': 2, '3': 1, '4': 1, '7': 3 }
// Now How to visit each key value pair .? (for the we will use (for in) loop

let sum =0;
for(let nik in ojj){
    
    if(ojj[nik]>= 2){
        sum += Number(nik);
    }
}
console.log(sum);
// o/p => 9            (7 + 2) they are more than 2 times


// Q.4 print the element whose occ. 1

let arr2=[2, 3, 4, 4, 3, 2, 5, 6, 6];    // usko print karna hai jo 1 bar hai
let occ={};

for(let i=0;i<=arr2.length-1; i++){
    
    if(occ[arr2[i]] == undefined){
        occ[arr2[i]]= 1;
    }
    else{
        occ[arr2[i]]++;
    }
           
}

for (let nik in occ){
    if(occ[nik] == 1 ){
     console.log(nik);

    }
}
// o/p => 5    (5 is only one time in arr2).


// Q5. Give me thename of people  whose salary is more than 30,000.

let emp_details=[
    {name: "Aman", Age: 24, salary: 35000},

    {name:"chunnu", Age: 42, salary: 25000},

    {name:"Pulkit", Age: 32, salary: 30000},

    {name:"NIk", Age: 20, salary: 52000},

];

for(i=0; i<=emp_details.length-1; i++){
   // console.log(emp_details[i]);  this will give me the allk out put

   if(emp_details[i].salary > 30000){
    console.log(emp_details[i].name);  // o/p => Aman and nik salary is more than 30k
   }
}
// bracket Notation
// console.log(emp_details[0]["salary"]);  this will give me aman salary 

// Dot Notation
// console.log(emp_details[3].salary);    nik salary 

/* Q6. fine the name of product whose price is more than 1lakh  */

let Product=[
    {name: "MacBook", rating:4.5, price:180000},

    {name: "Iphone 14 pro", rating:4.8, price: 120000},

    {name: "Ipad Pro", rating: 4.2, price: 150000},

    {name: "Apple watch 8", rating:4.8, price: 80000},

];

for(let i=0; i<=Product.length-1; i++){
     
    if(Product[i]["price"] > 100000){
        console.log(Product[i].name);
    }
}
// o/p=> MacBook Iphone 14 pro Ipad Pro  these are more than 1 lakh

















