/*  Conditional Statement create decision making in your code. 
"if" statements
"else if" statements
"else"statements

  if (condition) {
    code to run if condition is true
  } else if (condition){
    code to run if this condition is true
  }else {
    run some other code instead
  }

*Another example:

if (name === 'Gadget') {
  alert ('Go, go, gadget arms!');
}

inside the parenthesis is a condition. name === "Gadget" if this condition is true then an alert dialogue appears.

*Another example:

let shoppingDone=false;
let childsAllowance;

if (shoppingDone===true){
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

*  Lets briefly look back at functions as well

* function goToCoffeeShop(drink){
  alert(`Your ${drink} is on the way`);
}
goToCoffeeShop('Espresso')

* the parameter acts just like a variable within the parenthesis. (drink) is the parameter for the function. 
* Now your function is expecting to recieve information to excute your code. 
* Espresso is the argument we pass to the function

* A function parameter represents a value that you supply to the function via an argument so that function can do something with that value. 
*
*
*----------TEAMTREEHOUSE PROBLEM------------
*
*Add a do...while loop that keeps displaying the prompt dialog until the user types 'sesame'.
*
*/
let secret;

do {
  secret = prompt("What is the secret password?");
} while (secret !== 'sesame');

alert("You know the secret password. Welcome!");
/*
* create an empty variable for secret.
*assign prompt() to secret and show user the field to enter answer.
*check user input if `sesame` entered othewise run do {} statement.
*if answer if correct display alert message.
*start the do statement
*
*/