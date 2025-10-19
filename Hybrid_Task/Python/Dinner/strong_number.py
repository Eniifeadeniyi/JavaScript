number = input("Enter a number: ")

sum = 0
for digit in number:
	answer = 1
	for count in range(1, int(digit) + 1):
		answer *= count
	sum += answer

if sum == int(number):
	print(number + " is a strong number!")
else:
	print(number + " is not a strong number!")

