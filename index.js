//our conditional operators
//>,<, <=, >=, ==, !=

//We are only going to focus on our parameters for our For loops

//ex)  for(let i = 0; i < 10; i++)

//            what we know
//     -going to iterate 10 times, starting at i = 0,                 ending when i = 9
//     -increment by 1 each iteration


//1) create for loop parameters to satify these conditions. 
//start at index 10, until 1000 is reached, increment by 12

// This function logs increment of 12 with conditional of <=1000

function incrementTwelve (){
  for (let i = 10; i <= 1000; i+=12){
    //console.log(i)
  }
}
incrementTwelve()

// this function returns 1000 when i == 1006 which is the final value of by 12 increment 

//function incrementTwelve (){
  //for (let i = 10; i <= 1006; i+=12){
    //if(i == 1006 ){
      //return 1000
      //}
    //console.log(i)
 // }
//}
//incrementTwelve()




//2) create for loop parameters to satify these conditions. 
//start at index 100, until 1 is reached, decrement by 10

// this function can return 1 when it reaches index 0 by removing comments or the value if commments are not removed 

function decreaseByTen(){
  for (let i = 100; i >= 0; i-=10 ){
    //if(i === 0){
      //return 1
    //}
    //console.log(i)
  }
}
decreaseByTen()

//3) create for loop parameters to satify these conditions. 
//start at index 5, until -10 is reached, decrement by 1

function negativeNumnber(){
  for(let i = 5; i >= -10; i--){
    //console.log(i)
  }
}
negativeNumnber()


////////////////////////////////////////////////////////
//Now we will create 2 functions

//1) create a function that accepts one parameter
//   and returns that parameter multiplied by 3



function multiplied(i){
 // return i * 3;
}

//multiplied(5)


//2) create a function that accepts 3 parameters and returns the sum those parameters

function addition(a, b, c){
  return a + b + c;
}
addition(3,132,10)