// HIGHER ORDER FUNCTION 

/* A function which is taking another function as a paramenter or 
returning a fumction as the out put are called HOF */

//.map => return a new array => when i have a new array

//.filter => new array => for filtrring 

///.forEach => undefined => map 


/* FIrst we have to do revision  */
// How to check PRime number 
function primecheck(num){
    let count=0;

 for(i =1 ; i<= num;i++){
    if(num%i ==0){
        count++;
    }
 }   
 if(count==2){
    return true;
 }
 else{
    return false;
 }
}
let ans = primecheck(13);

if(ans== true){
    console.log("Prime Number");
}
else{
    console.log("NOt A prime Number");
}

// o/p=> Prime Number

//Q1
function print (){
    console.log("My NAMe IS CHUNNU ");
}
print();                    // invoking the function (calling it )
// op=>My NAMe IS CHUNNU

//Q2 perameter 

function add (a,b){  //add(parameter)
    console.log(a+ b);
}                               // from funtion { all inside it is declration}
add(10,30);   // arrgument
//op=> 40

//Q3. find even number between 1 givin limt usuing function 

function checkEven(num){
    if(num %2 ==0){
        return true;
    }
    return false;
}

for(let i=1; i<=10; i++){
    let ans = checkEven(i);
    if( ans == true ){
       
        console.log(i,"is even");
    }
    else{
        console.log(i,"is Odd");
    }
}

// op=-> 1 is Odd
/* 2 is even ,3 is Odd ,4 is even, 5 is Odd, 6 is even  this until 20 
parameter ==> num
argument ==> i
invoking ==> at line number 56 => waking up the function (calling )
*/

//Q4

function eatBreakfast(food){   // food is a peramenter
    console.log("i am going to eat" + food +"today ");  // declaration
}
eatBreakfast( " Idli ") // argument 
// op=> i am going to eat Idli today 

//Other function in side function 

let brush = function (){
    console.log("Please brush your teeth first ");  
}

function eatBreakfast1(food,brush){
    brush();                                        // calling
    console.log("I am going to eat "+food+" today");
}
eatBreakfast1("idle",brush);        // invoking all 

// op=> Please brush your teeth first 
//      I am going to eat idle today

//Q5 
let print1 = function (){
    console.log("Hello world!");
}
print1 =10;
console.log(print1);
// o/p => 10

/*Q6 i want output like this 
-2,
-5, 
10 ,
 45, 
 99   */
let arr = [-2,-5, 10 , 45, 99];
let new_arr=[];
for(i=0; i<=arr.length-1; i++){
    let pro=arr[i]*i;
    new_arr.push()
}
console.log(new_arr);

//op => -2,-5, 10 , 45, 99      ==> product of element and index
// but there is also smart way 

let nw_arr= arr.map(function(element, index){
 console.log(element, index)
})
/* elemnet and index
 -2 0
-5 1
10 2
45 3
99 4 */

let arr1 = [-2,-5, 10 , 45, 99];
let nw_arr1= arr1.map(function(element, index){   //HOF .map()
      return element * index;
});
console.log(nw_arr1);
// map is always going to return a new array  
// op=>  [-2,-5, 10 , 45, 99];

//Q6  print new arry only contain even number 

let arr2= [1, 2 ,3,4 ,5 ,6 ,7 ,8, 56, 4];

// traditonal mothed
let newarr= [];
for(i=1; i <= arr2.length-1;i++){
    if(arr2[i]%2 == 0){
    newarr.push(arr2[i]);
}
}
console.log(newarr);
// op=> [ 2, 4, 6, 8, 56, 4 ] all the even number got printed

// Smartway to write  .filter()

let new_arr1= arr2.filter(function(element, index){
    return element %2 ==0;
});
console.log(new_arr1);
// same op => [ 2, 4, 6, 8, 56, 4 ]

//Q7 
let arr3 = [-2,-5, 10 , 45, 99];

let bag="";
for(let i=0; i<=arr3.length-1;i++){
    bag+=arr3[i]+" ";
}
console.log(bag);
// op=> -2 -5 10 45 99  this is traditonal way

// Smartway to write the code
let arr4 = [-2,-5, 10 , 45, 99];

let bagg="";
arr4.forEach(function(element,index){
    bagg+=element+=" ";
});
console.log(bagg);
// op=> -2 -5 10 45 99  this is by using for each function 


// map will return a new array but forEAch undefined

let arr5=[2, -5, 10, 20,30];

let x=arr5.forEach(function(element, index){
    return element;
});
console.log(x);
// op=> undefined  beacuse forEach retun undefined 


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    