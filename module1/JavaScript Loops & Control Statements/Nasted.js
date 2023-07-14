/*  NASTED LOOP     */



// for(let i= 1; i<=10; i++){
//     let bag="";
//     for(let j=1; j<=5;i++){
//         bag +="*" +"";
//     }
//     console.log(bag);
// }

//printing the value of  hello world in 3 farm 5 times

for (let i=1; i<=3; i++){

    for(j=1; j <=5; ++j){
        console.log("Hello World!")
    }
    
}
// hello world *15

/* Q  father and son duo , they have 5 farms, 
one day father asked to plant 5 seedds in each plant.  */

for( let i=1; i <=5; i++){   // for farm
   
    let bag = "";

    for(let seed =1; seed <=5; seed++){      // seed

        bag +="*" + " ";

    }console.log(bag);

}
// o/p => ***** 5 time horizontal

/* Q, chhunu is asking to muunu to
 plant 5 seeds in the 10 farms that they have but in horizontal manner */


 for(let farm =1; farm <=10; farm++){
    let bag1 = "";
    for(let seed =1; seed <=5; seed++){
        bag1 += "*"+ " ";
    }
    console.log(bag1);
 }
 // o/p =>10 times in line  * * * * *

/* Chunnu is asking to munnu to plant seeds as per following details */

//Farm 1 ==> *
//farm 2 ==> **
//farm 3 ==> ***
//farm 4 ==> ****


for (let farm=1; farm <=4;farm++){

    let bag3="";

    for(let seed=1; seed<= farm; seed++){

        bag3+= "*"+ " ";

    }console.log(bag3);
}
// o/p => 
/* 
    * 
    * * 
    * * * 
    * * * * 
*/

/* Q. print this out put.

  OUTPUT 
1
*
1 2
* *
1 2 3
* * *
1 2 3
* * *
1 2 3 4
* * * *                                 */


for(let i=1; i<=4; i++){

let bag4="";  // number
let bag5="";  // stars

for(let j=1; j<=i; j++){
    
        bag4 += i + " ";
        bag5 +="*"+ " ";
    
}
console.log(bag4);
console.log(bag5);
}

// output => done


/* BREAKE AND COUTINUE STATEMENT */

// break statement 

for(let i=1; i<=4; i++){

    for(let j =1; j <=3; j++){

        if( i == 2){
            break;
        }
        console.log(i,j)
    }
}
 /*   Output
1 1
1 2
1 3
3 1
3 2
3 3
4 1
4 2
4 3   */


// Q, continu

for(let p=1; p<=4; p++){

    for(let k =1; k <=3; k++){

        if( k == 2){
            continue;
        }
        console.log(p,k)
    }
}

/* output
1 1
1 3
2 1
2 3
3 1
3 3
4 1
4 3       */