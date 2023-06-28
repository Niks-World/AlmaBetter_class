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


//  Switch Statement
// dayOfWeek

let dayofweek= 1;
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


