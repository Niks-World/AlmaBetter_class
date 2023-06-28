//JavaScript Decision Statements


//Write a JavaScript program that takes a temperature as input and outputs a message about the weather.

let temperature = 21;

if (temperature <= -2){
    console.log("it's freezing outside")
}
else if (temperature <=20){
 console.log("The wateher is cool")
}
else if (temperature <= 30){
    console.log("The Weather is Warm")
}
else{
    console.log("it's Hot Outside")
}

// OUTPUT THE WATER IS WARM

//Nested if...else Statement

// Checks if Number is Positive or not. Also checks it the number is even or odd. 

let num = -11;
if (num < 0)
if (num %2 == 0)
         console.log("Nagative and Even")
         else
         console.log("Nagative and Odd")
     
    if(num >0)
    if(num %2 == 0)
            console.log("Positive and Even")
            else
            console.log("Positvie and Odd")
 
// OUTPUT NAGATIVE AND ODD            


//  Switch Statement
// dayOfWeek

let dayofweek= 6;
let dayname;

switch(dayofweek){
    case 1:
        dayname= "Monday";
        break;
        case 2:
        dayname ="Tuesday";
        break;

        case 3:
            dayname= "Wednesday";
            break;

        case 4:
            dayname = "Thursday";
            break;
          
        case 5 :
            dayname="Friday";
            break;
            
        case 6:
            dayname= "Saturday";
           break;
           
        case 7:
            dayname="Sunday";
            break;
            
        default:
            dayname= "Invalid Day"
            break;   
}
 
console.log(dayname);

//OUTPUT SATURDAY

// You can have multiple case statements that share the same code block by omitting the break statement after each case statement. 

let fruit = "Grape";
let color;

switch(fruit){
    case 'Banana':
    case "Lemon" :
       color = "Yellow";
       break;
       
    case "Apple":
    case "Cherry":
    case "Strawbweey":
        color = "Red";
        break;

    case "Grape":
    case  "Blueberry":
        color = "Purple";
        break;
        
    default:
        color = "Unknown"
        break;    

}

console.log(color);

//OUTPUT PURPEL

//  Example Use cases of Switch Statement

// 1. Type Checking in Switch Statement

let value =true;

switch(typeof value){
    case "string":
        console.log("The value is string");
        break;
    
    case "number":
        console.log("The value is number");
        break;

    case "boolean":
        console.log("The value is boolean ")
        break;

     default:
        console.log("the valiue is not String, Number, Boolean") 
        break;  
}

// OUTPUT IS BOOLEAN

// Simple Calculator
// 2. Write a program to make a simple calculator with the switch statement.
//    Use the parseFloat() function to convert the user input from a string to a number.

// let nik1= parseFloat(prompt("10"));
// let nik2= parseFloat(prompt("20"));
// let operator = prompt('+,-,*./');

// let result;

// switch(operator){
//     case "+":
//         result = nik1 + nik2;
//         break;

//     case "-":
//         result = nik1 - nik2;
//         break;
        
//     case "*":
//          result = nik1 * nik2;
//          break;
            
//      case "/":
//         result = nik1 / nik2;
//          break;

//     default:
//         console.log("Invaild Operator");     
// }

// console.log(`The result of ${nik1} ${operator} ${nik2} is ${result}`);
// expated Output is 
//(the result of nik1 operator nik2 is result) but thise code not work

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: 10', (nik1Input) => {
  const nik1 = parseFloat(nik1Input);

  rl.question('Enter the second number: 20', (nik2Input) => {
    const nik2 = parseFloat(nik2Input);

    rl.question('Enter the operator (+,-,*,/): ', (operator) => {
      let result;

      switch (operator) {
        case "+":
          result = nik1 + nik2;
          break;
        case "-":
          result = nik1 - nik2;
          break;
        case "*":
          result = nik1 * nik2;
          break;
        case "/":
          result = nik1 / nik2;
          break;
        default:
          console.log("Invalid Operator");
          rl.close();
          return;
      }

      console.log(`The result of ${nik1} ${operator} ${nik2} is ${result}`);
      rl.close();
    });
  });
});

//OUTPUT UNEXPATED The result of 10 + 20 is 30



// check equal or not live time =1:59

// if if...else 

let i = 20;

i == 0 ? console.log("equal To Zero ") : console.log("Not equal")

// these two way to write this same code.

if (i ==0 ){
    console.log("equal To Zero ")
}
else{
    console.log("Not equal")
}




