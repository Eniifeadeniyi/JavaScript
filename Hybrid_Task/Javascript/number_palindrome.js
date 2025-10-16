let number = "12345"

let reverse = " "
for(let digit = 0; digit < number.length; digit += 1) {
	 reverse = number[digit] + reverse
}
console.log(reverse);
if(reverse == Number(number)) console.log(number + " is a palindrome!")
if(reverse != Number(number)) console.log(number + " is not a palindrome!")
