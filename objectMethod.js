// OBJECT METHOD

let obj={
    // key and value pair 
};
// declaration 
function print(){
    console.log("Hello World!")
}
// calling
print() // o/p => hello world!

//Q1. write an object method to print you name age location .

let my_detls={
    name:"nik",
    age:24,
    locati00on:"Delhi"

};
console.log(my_detls); //op=> { name: 'nik', age: 24, locati00on: 'Delhi' }

// bracket Notation 
console.log(my_detls["locati00on"]);  // Delhi

// dot notation 
console.log(my_detls.age); //24

//Q. write in side the object a function method

let obj1={
    print: function(name,place){
        console.log("my name is",name);
        console.log("i am from,place");
    }
};
obj1.print("clark kent", "las vegas")
//my name is clark kent
//i am from,place

//Q3.

let obj2={
    print: function(x,y){   //x=10 y=20
        return x+y;         // here i am giving camand for adding
    }
};
let sum = obj2.print(10,20);   // here i am giving the value 
console.log(sum); // op=> 30

//undfined  default 
function print(x,y){ 
    console.log(x,y);
}
print(10);  // 10 undefined its taking the y value is undfined 

//Q
function print(x,y=20){  // default parameter
    console.log(x,y);
}
print(10); //10 20

//Q, How we use form in object and useing the function of submit , reset and total.
// (this) function is very important to transfer data from object
/* 1. Object method are function that are declared inside the object which perform a spacific task,
2. in the data present inside the object.  */

let form={
    name:"chunu",
    DOB:"10/2/2020",
    place:"Delhi",
    marks: {
        phy:25,
        eng:45,
        math:90,
        chem:98
    },
    submit: function(){
        console.log(this.name);
        console.log(this.DOB);
        console.log(this.place);
        console.log(this.marks.phy, this.marks.chem, this.marks.eng, this.marks.math);
        console.log("Above data has been submited");

    },
     reset : function(){
        this.name=" ";
        this.DOB=" ";
        this.place= " ";
        this.marks=" ";
        console.log("Name:",this.name);
        console.log("DOB:",this.DOB);
        console.log("Place:",this.place);
        console.log("marks:",this.marks);

    },
    total: function(){
        console.log("Total Marks:", this.marks.chem + this.marks.math + this.marks.eng + this.marks.phy);
    }


}
form.submit();
// form.reset();
form.total();   //Total Marks: 258         

/*Q  AN OBJECT is given with L and W of a rectangle, write object method to calculete area perimeter of rectangele*/

let obj4={
    l:30,
    w:30,
    perimenter : function(){
        console.log(2*(this.l +this.w));
    },
    area: function(){
        console.log(this.l *this.w);
    }
};

obj4.perimenter();  // op=> 120
obj4.area()        //op=> 900

// Declare an object method
//Output
// NAME: Ram
// AGE: 39
// My hobbies are coding," reading" ,"biking";

let details ={
   name: "Ram" , 
   age: 39,
   hobbies: ["coding" ,"reading","biking"],
   print: function(){
    console.log("Name:",details.name);
    console.log("ade:",details.age);
    console.log("MY hobbies",details.hobbies.join());
   }
};
details.print(); // SAME OUTPUT WILL COME LIKE ABOVE


//Q. if we get lots of number to add than we can use this function to add all the number  

function sun(...x){   //sprade method // rest parameters

    let total=0;
    for(let i=0; i<=x.length-1; i++){
        total +=x[i];
    }
    console.log(total); // op => 450
}
sun(10, 20, 30, 40, 50, 60, 70,80, 90) 






