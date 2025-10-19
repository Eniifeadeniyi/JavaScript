for(let number = 1; number < 1001; number++) {
let sum = 0
let string = String(number)
	for(let count = 0; count <= string.length; count++) {
		let power = string.charAt(count) ** string.length;
		sum += power;
}
if(sum == number) console.log(number)
}

