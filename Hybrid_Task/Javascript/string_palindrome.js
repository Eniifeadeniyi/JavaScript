let word = "madam"

let reverse = " "
for(let letter = 0; letter < word.length; letter += 1) {
	 reverse = word[letter] + reverse
}
console.log(reverse)
if(reverse == word) console.log(word + " is a palindrome")
if(reverse != word) console.log(word + " is not a palindrome")