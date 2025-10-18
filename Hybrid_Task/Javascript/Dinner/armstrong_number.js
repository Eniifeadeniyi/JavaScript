let prompt = require('prompt-sync')();

let number = prompt("Enter a number: ");

let sum = 0

for(let count = 0; count < number.length; count++) {
	let power = number.charAt(count) ** number.length;
	sum += power;
}
if(sum == number) console.log(number + " is an Armstrong number!");
if(sum != number) console.log(number + " is not a Armstrong number!");