let word = "EniIfE"

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let count = 0
for(letter in word) {
	for(character in letters) {
		if(letter == character)	count += 1
}

}

console.log(count)