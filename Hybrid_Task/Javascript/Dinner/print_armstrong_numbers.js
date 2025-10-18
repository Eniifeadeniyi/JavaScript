let sum = 0

let number = 1;

while(number <= 1000) {
if(sum == number) console.log(number)
for(let count = 0; count < number.length; count++) {
	let power = number.charAt(count) ** number.length;
	sum += power;

}
number++;
}

