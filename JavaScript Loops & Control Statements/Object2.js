//     OBJECT 2

let obj = {
    name: "NIK",
    age:24,
    location: "Delhi"
};

let obj1={ ...obj,  // using (...) Sprade method
Hobbies:["coding","gaming"]};
console.log(obj1)

// GIVEN a string print, the number of times each charecter apears.

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