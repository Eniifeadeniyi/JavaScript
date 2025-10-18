let prompt = require('prompt-sync')();

let number = prompt("Enter a number: ");

let divisor = 10 ** (number.length - 1)
const range = number.length
let digits = ""
for(let count = 0; count < range; count++) {
	let digit = Math.floor(number / divisor);
	digits += digit;
	number %= divisor; 
	divisor /= 10;
	}

console.log(digits)

let sum = 0;
let answer = 1;
for(let index = 0; index < digits.length; index++) {
for(digit.charAt(index)) {
	//console.log(digit)
	for(let count = 1; count <= digit; count++) {
	answer *= count;
	console.log(answer)
	
}
sum += answer
console.log(sum)
}
}