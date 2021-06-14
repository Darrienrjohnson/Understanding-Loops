/**--Understanding For Loops---
 * The for loop is a more compact varaiation of the while loop with similar parts and is useful when you know how many times you want to repeat an action.
 */
//Review and compare while loops
let counter = 0;
while (counter < 10) {
  console.log(counter);
  counter += 1;
}
// Now lets compare the same loop but as a for loop.
for (let counter = 0; counter < 10; counter += 1) {
  console.log(counter);
}
// completes the same action but much more compact
function getRandomNumber(upper) {
	return Math.floor(Math.random() * upper) + 1;
}
for (let i = 0; i < 10; i++){ 
  console.log(`The random number is ${getRandomNumber(10)}`);
}
// To make the for loop even smaller most programmers use a single letter to represent the counter variable so we'll change (let counter = 0; counter < 10; counter++) to the code above. 

//Practice problem: Create a for loop that logs the number 5 to 100 to the console.
for (let i = 0; i <= 100; i++) {
  console.log(i);
}