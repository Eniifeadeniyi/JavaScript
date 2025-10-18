let prompt = require('prompt-sync')();

let numberOne = prompt("Enter a number: ");
let numberTwo = prompt("Enter another number: ");

let multiple = 1
for(; multiple != 0; ) {
	if(multiple % numberOne != 0 | multiple % numberTwo != 0) multiple++
	if(multiple % numberOne == 0 && multiple % numberTwo == 0) break; 
}
console.log(multiple);

