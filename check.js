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


let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

[a, b] = [b, a];

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);