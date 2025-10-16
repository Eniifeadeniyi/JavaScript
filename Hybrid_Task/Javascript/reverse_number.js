let number = "12345"

let reverse = " "
for(let digit = 0; digit < number.length; digit += 1) {
	 reverse = number[digit] + reverse
}
console.log(reverse)