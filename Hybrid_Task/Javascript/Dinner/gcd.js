let prompt = require('prompt-sync')();

let numberOne = prompt("Enter a number: ");
let numberTwo = prompt("Enter another number: ");

let max = Math.max(numberOne,numberTwo);
let min = Math.min(numberOne,numberTwo);

let divisor = 2; 
let greatest = 1;
while(divisor <= max) {
	if(max % divisor == 0) {
		if(min % divisor == 0) {
			if(divisor > greatest) greatest = divisor;
		}
	}		
			
divisor++;
}
console.log(greatest);

