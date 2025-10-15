word = "MaDaM"
word = word.lower()
reverse = ""
for letters in word:
	reverse = letters + reverse
if reverse == word:
	print(word + " is a palindrome!")
else:
	print(word + " is not a palindrome!")
