number = input("Enter a number: ")

sum = 0
for digit in number:
	power = int(digit) ** len(number)
	sum += power

if sum == int(number):
	print(str(number) + " is an Armstrong number!")

if sum != int(number):
	print(str(number) + " is not an Armstrong number!")