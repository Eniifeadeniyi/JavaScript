let prompt = require('prompt-sync')();

let number = prompt("Enter a number: ");

let sum = 0
for(digit in String(number)){
	let answer = 1
	for(let count = 1; count <= number.charAt(digit); count++){
		answer *= count
	
}
sum += answer
}
if(sum == number) console.log(number + " is a strong number!")
else console.log(number + " is not a strong number!")
