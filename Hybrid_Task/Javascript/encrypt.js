let prompt = require('prompt-sync')();


let number = prompt("Enter a four-digit number: ");

let digits = "";

let power = 1000;


for(let count = 1; count <= 4; count += 1) {
	let digit = Math.floor(number / power);
	let inflate = (digit + 7) % 10;
	digits += inflate;
	number %= power;
	power /= 10;	
}
console.log(digits);

for(digit in digits) {
	
	
//int[] rearrange = new int[4];
//rearrange[0] = digits[2];
//rearrange[1] = digits[3];
//rearrange[2] = digits[0];
//rearrange[3] = digits[1];

//System.out.print(rearrange[0]);
//System.out.print(rearrange[1]);
//System.out.print(rearrange[2]);
//System.out.print(rearrange[3]);
//}
//}