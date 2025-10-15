let word = "eniifeoluwa"
let count = 0;
let count_e = 0;

while(count < word.length) {
	if (word[count] == "e") {
	count_e += 1;
	}
	count += 1;
}
console.log(count_e);