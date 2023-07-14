/*  OBECCT I  */

/* If something is not there or you can say if we
have not assigned any value to any variable, JS is
going to assign a default value to it , and that
default value is ( undefined).   */

// example

let arr =[10 ,"Aman", 30 , 40, "chunnu"];

console.log(arr[0]); // 10
console.log(arr[1]); // Aman
console.log(arr[2]); // 30
console.log(arr[3]);  // 40
console.log(arr[4]);  // Chunnu
console.log(arr[5]); // Undefined  because there is no any index of [5]

// Other example

let x;
console.log(x);
// o/p => Undefined

/* Q. you manager asked you to give your deteails to HR.  */


let deteails={
    name : "Nik",
    age: 24,
    location: "Delhi",
    organisation:"Masai",
    english: 80,
    math: 90,
    phy: 75
};

console.log(deteails);
/* o/p => name: 'Nik',
  age: 24,
  location: 'Delhi',
  organisation: 'Masai',
  english: 80,
  math: 90,
  phy: 75  */

  /* Q. Create an object contaning your detalis  */

  let My_deteails={
    name : "Nik",
    age: 24,
    location: "Delhi",
    organisation:"AlmaBetter",
    Hobbies:["Coding", "Riding","Travelling"],
};
console.log(My_deteails);
// my details is output

/* in OBJECT there is no concept of index */ // object => index == keys


// breaket Notaiton and we have Dot Notation 

let deteails1={
    name : "Nik",
    age: 24,
    location: "Delhi",
    organisation:"Masai",
    english: 80,
    math: 90,
    phy: 75
};

// braket Notaion
console.log(deteails1["organisation"]);   //masai
console.log(deteails1["location"]);       // Delhi

// dot Notaion
console.log(deteails1.name);   // Nik
console.log(deteails1.age);    //24


// how to UPDATE

let emp_detaile={
    name: "NIK",
    age:24,
    location: "Manali",
    hobbies:["Coding", "Bike Riding","Travilling"],
};

emp_detaile.name= "Nikhil";  // dot Notation

console.log(emp_detaile); //name got updated from nik to nikhil



/*  How can i add something in object  */

let detalis2 ={
    name: "NIK",
    age:24,
    location: "Manali",
    hobbies:["Coding", "Bike Riding","Travilling"],

};

detalis2["isMarried"] = false ;  //bracket notation
detalis2.Phone = "984674526";   // dot notation

console.log(detalis2);

/*  { this is added output
  name: 'NIK',
  age: 24,
  location: 'Manali',
  hobbies: [ 'Coding', 'Bike Riding', 'Travilling' ],
  isMarried: false
  Phone: '984674526'
}  */


// CONCLUSION:
/*
 1. if the key is already present in the object , it will get updated.

 2. if the key name is not present , it will get added.         */


 // How to Delete Something

 let emp_detaile1={
    name: "NIK",
    age:24,
    location: "Manali",
    hobbies:["Coding", "Bike Riding","Travilling"],
    isMarried: false,
    Phone: '984674526'
  
};
delete emp_detaile1["location"];     // bracket notation

delete emp_detaile1.age;           // dot notation

console.log(emp_detaile1);

/*  { THis is the output
  name: 'NIK',
  hobbies: [ 'Coding', 'Bike Riding', 'Travilling' ],
  isMarried: false,
  Phone: '984674526'
}  */


/* How to get print the key value inside array  */
// print Bike Riding , Travelling and Location 

let emp_detaile3={
    name: "NIK",
    age:24,
    location: "Manali",
    hobbies:["Coding", "Bike Riding","Travilling"],
    isMarried: false,
    Phone: '984674526'
  
};

console.log(emp_detaile3["hobbies"][1]);  //bracket notation

console.log(emp_detaile3.hobbies[2]);     //Dot notation

console.log(emp_detaile3["location"]);   //Bracket Notation

/* o/p =  >Bike Riding
           Travilling
            Manali               */


/* If there is key in side key 
how will get print that. 
print the city name  and pincode  */            

let custome ={
    name:"Ramesh",
    payment:"credit card",
    card_number:"1545315545463416",
    address:{
        locallity:"Hauz khas",
        city:"New Delhi",
        pincode:"110065",
        house:"A-101"
    }
};

console.log(custome.address.city);           // Dot Notation

console.log(custome["address"]["pincode"]);   //Bracket Notation

// o/p => New Delhi 110065


/*  for..in loop   
   [NO INDEX IS NEEDED]                */
 // WHEN WE WANT TO PRINT ALL THE KEY VALUE ONLY HOW WILL YOU DO


   let emp_detaile4={
    name: "NIK",
    age:24,
    location: "Manali",
    hobbies:["Coding", "Bike Riding","Travilling"],
    isMarried: false,
    Phone: '984674526'
  
};
// One way is this but long.
 console.log(emp_detaile4["name"]);    //Nik
 console.log(emp_detaile4["age"]);       //24
 console.log(emp_detaile4["location"]);   // manali
 console.log(emp_detaile4["hobbies"]);   //coding bike riding travilling
 console.log(emp_detaile4["phone"]);    //987345656545

// Other Way Smarat WAy

for(let i in emp_detaile4){

    console.log(emp_detaile4[i]);
}

/* OUTPUT  
 NIK
24
Manali
[ 'Coding', 'Bike Riding', 'Travilling' ]
false
984674526  */


//For..IN LOOP

let custome1 ={
    name:"Ramesh",
    payment:"credit card",
    card_number:"1545315545463416",
    address:{
        locallity:"Hauz khas",
        city:"New Delhi",
        pincode:"110065",
        house:"A-101"
    }
};

for(let j in custome1){

    console.log(custome1[j]);  //  keys all value will be printed

    console.log(j,":" ,custome1[j]);  // all key and value will be printed

}
/* out put 
name : Ramesh
credit card
payment : credit card
1545315545463416
card_number : 1545315545463416
{
  locallity: 'Hauz khas',
  city: 'New Delhi',
  pincode: '110065',
  house: 'A-101'
}
address : {
  locallity: 'Hauz khas',
  city: 'New Delhi',
  pincode: '110065',
  house: 'A-101'
} */