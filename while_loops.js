/*
* Loop is a way to repeat the same action a certain amount of times until a specific condition is true

* Conditional Statements: if statements run a block of code if the condition is true. See conditional tab for more. 

* Loops are very similar. the while loop for instance has some of the same features

while (condition) {
  looping code
}
--------While Loop---------*/
function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}
let counter = 0;
while (counter < 10) {
  console.log(`The random number is ${getRandomNumber(10)}`);
  counter = counter +1
}
/** -----Lets unpack this loop------
 * We created a function that generates a random number from 1 - ? this ? is whatever we pass as an argument. getRandomNumber(?);
 * if we wanted to log 10 random number we could copy and paste console.log 10x but we can use a loop for that
 * we use a varaible to track a value, number of times (10) we print a random number to the console.

let counter = 0;

 * everytime we print to the console we'll add one to the counter varaible. 

while () {
  counter +=1;
}
* then we create the condition for which the counter will increment by 1.

while (counter < 1) {

}
 * as long as the number assigned to the counter variable is less than 1 the loop will repeat itself. 
 * Now lets add more code inside the loop to excute the function. getRandomNumber function generates a random number from 1 to 10. well print the results of the function to the console. 

console.log(getRandomNumber(10));

 * Lets also display the random number in a message so we use backticks `` to create a template literal and to interpilate the number into the string output and show the results of the function we use ${}

console.log(`The number number is ${getRandomNumber(10)}`);

 * Now lets put it all together. 

let counter = 0;
while (counter < 10) {
  console.log(`The random number is ${getRandomNumber(10)}`);
  counter = counter +1
}
-------- The End of Note-------*/
function getRandomNumber(upper) {
	return Math.floor(Math.random() * upper) + 1;
}
let counter = 0;
do {
  console.log(`The random number is ${getRandomNumber(10)}`)
  counter++ //or counter+=1;
} while (counter < 10);
/**
 * Side Note: counter-=1 and counter+=1 are the same as counter-- and counter++

do  {
  code to run
}
while (condition);


 * The difference between do while and while loops is that while loop condition are checked at the beginning. if the condition is true at the beginning the code will run but if not the code will never excute.
 * Do while loops will also run once and then check to see if the condition is true.
 * Use do while if you need your code to run at least one time.  
 */