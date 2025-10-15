let word = "eniifeoluwa"
let count_a = 0;
let count_e = 0;
let count_i = 0;
let count_o = 0;
let count_u = 0;

let count = 0;
while(count < word.length) {
	if (word[count] == "a") count_a += 1;
	if (word[count] == "e") count_e += 1;
	if (word[count] == "i") count_i += 1;
	if (word[count] == "o") count_o += 1;
	if (word[count] == "u") count_u += 1;
	count += 1

}
	let total = count_a + count_e + count_i + count_o + count_u
	console.log(total)