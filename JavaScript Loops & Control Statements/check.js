// let a=2;

// console.log(a++ + ++a)
// console.log(a++ * ++a) 
//4+1=5 , 5+1=6
// 4*6=24

// console.log("0" == 0)
// console.log("0" === 0)

// console.log((5 > 2) && (7 < 11))
// console.log((7 > 9) || (9 < 5))


// if(a > 6) {
// 	console.log("Pass")
// } else {
// 	console.log("Fail")
// }

// console.log(a > 6 ? "Pass" : "Fail")



// var a=0
// for(a; a<5; a++);
// console.log(a)
//  function tail(o) {
//     for(; o.next;o=o.next) ; return o; }


// let a = 5;
// let b = 10;

// console.log("Before swapping:");
// console.log("a =", a);
// console.log("b =", b);

// [a, b] = [b, a];

// console.log("After swapping:");
// console.log("a =", a);
// console.log("b =", b);

// function range(length) {
//     a = 5;
//     for (i = 0; i < length; i++) {
//       console.log(a);
//     }
//   }
//   range(3);

//   var a = 10; do { a += 1; 
//     console.log(a); } while (a < 5);

//     const arr = [10, 20, 30];
//     let result = 0;
//     function myFunction(value, index, array) {  
//         result += value;
//     }
//     arr.forEach(myFunction);
//     console.log("Result: ", result)


// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }



// let i=5;
// while (i >= 1){
//   console.log(i);
//   i--;
// }

// let i = 10;

// do {
//   console.log(i);
//   --i;
// } while (i == 5);


// for (let c =10; c>=1; c--){
//   console.log(c)
// }

// let n=15;
// let m=2;
//  for( let i =2 ; i<=15;  i+=2){
     
//   console.log(i);

//  }

var a = [1,2,3,4,5];

a.slice(0,3);
console.log(a);

var a = 0;
var b = 0;

while (a < 3) {
  a++;
  b = a;
  console.log(b);
}


o = {x:1, y:{z:[false,null,""]}};

s = JSON.stringify(o);

p = JSON.parse(s);