number = int(input("Enter a number: "))

sum = 0

for divisor in range(1,number):
	if number % divisor == 0: 
		sum += divisor

if sum == number:
	print(str(number) + " is a perfect number!")
if sum != number:
	print(str(number) + " is not a perfect number!")