number = 16

for divisor in range(1,number + 1):
	power = number ** (1 / divisor)
	for base in range(2,number+1):
		if number % base == 0:
			if type(power) != float:
				print(count)
				print(divisor)

			