//while Loop

// + Adding number

let a= 10;

a +=10;           //same way
a= a +20;         // both are same
a++;             // these are also same
++a;             // other way to write
console.log(a)

//- subtract number

let b =50;
b = b - 30;
b -= 15;
b--;
--b;
console.log(b);

// POST INCREMENT 

let x = 10;
// x become y first than print after that ++ added 
let y = x++;     // post incrmnet here 
                 // first assing the value than add
console.log(x);   //11
console.log(y);    //10


//// POST DECREMENT 

let X = 10;

let Y= X--;         // x become ygrt print
                    // than X become 9 by -1
console.log(X);    //9
console.log(Y);    //10

// PRE INCREMENT 

let w = 10;

let q = ++w ;        // w get add frist and get print    
                    // q become 11 and get printed

console.log(w);     // 11
console.log(q);     //11

// Pre DECREMENT 

let  c = 10;

let d = --c;     // c - by 1 become 9  and than c become d

console.log(c)   // 9

console.log(d);  //9

//Q  PRE INCREMENT POST INCREMENT 

let j =10;

let k = ++j;       // j get add first 11 and than k also become 11

let l =10;  

let n =  l++;     // l become n so n vale is =>10 and than get add by 1 l =11  

console.log(j,k,l,n);   //11 11 11 10

// Q. PRE DECREMENT  POST DECREMENT 

let e = 6;

let f = e--;       // e get assing value with f and get print f=>6 and e -1 =>5

let g = 10; 
 
let h = --g;     // g first decerment by -1 g => 9, and g assing to h =>9  

console.log(e,f,g,h,)     // 5 6 9 9

// print the counting from 1 to 10

let s=1;           // starting
while(s <= 10){     // ending
    console.log(s)    // statement
    s++;             // increment
}
// o/p- 1 2 3 4 5 6 7 8 9 10


// incremnet the value by 2
// x+ = 2;  this is the code u can put any number insted of 2

let u=1;
while (u <=20){
    console.log(u);
    u += 4;       // means +4 add in 1 +4 =5 +4 =9     
} 
// o/p = 1 5 9 13 17

// BREAK STATEMENT 

// PRINT THE VALUE  FORM 1 to 5 with break statment

let t=1

while(t <= 10){   //if true than +1 and loop
    if(t ==5){     // when get equal than stop 
        break;
    }
    console.log(t);
    t++;
}
// o/p - 1234

// CONTINUE STATEMENT

let v =1;

while( v <=10 ){
    v++;
    if(v == 3){      // when v become 3 skip it and continu 
         // we also can use (3 ==3) to stop when it become 3 

        continue;
    }
    console.log(v);
}






