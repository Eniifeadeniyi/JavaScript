let prompt = require('prompt-sync')();

let number = prompt("Enter a number: ");

let sum = 0;

for(let divisor = 1; divisor < number; divisor++) {
	if(number % divisor == 0) sum += divisor;
}
if(sum == number) console.log(number + " is a perfect number!");
if(sum != number) console.log(number + " is not a perfect number!");