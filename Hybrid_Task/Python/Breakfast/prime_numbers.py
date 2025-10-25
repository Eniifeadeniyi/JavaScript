numbers = " "
for number in range(1,101):
	count = 0
	for divisor in range(1, 101):
		if(number % divisor == 0):
			count += 1
	if(count == 2):
		numbers += str(number)
print(numbers)
	


