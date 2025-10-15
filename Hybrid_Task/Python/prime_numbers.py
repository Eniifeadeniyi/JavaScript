
count_divisor = 0
for number in range(2,101):
	for divisor in range(1,101):
		if number % divisor == 0:
			count_divisor += 1
	
		if count_divisor <= 2:
			print(number)	