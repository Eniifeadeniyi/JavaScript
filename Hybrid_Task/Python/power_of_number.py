number = 16

for divisor in range(1,number + 1):
	for count in range(2,number+1):
		if number % count == 0:
			if type(number ** (1 / divisor)) != float:
				print(count)
				print(divisor)

			