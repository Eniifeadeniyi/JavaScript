number = "12345"
for digit in number:
	reverse = number[-1::-1]
if reverse == number:
	print(number + " is a palindrome!")
else:
	print(number + " is not a palindrome!")
