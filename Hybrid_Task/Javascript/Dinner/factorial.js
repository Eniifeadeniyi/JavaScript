let prompt = require('prompt-sync')();

let number = prompt("Enter a number: ");

let answer = 1;

for(let count = 1; count <= number; count++) {
	answer *= count;
}
console.log(answer);