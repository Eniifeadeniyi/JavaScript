let word = "EniIfE"

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


let counter = 0
for(let count = 0; count < word.length; count += 1) {
	for(letter in letters) {
		if(word.charAt(count) === letter) counter += 1
}
}

console.log(counter)