number = 100
count = 0

for divisor in range(1, number + 1):
	if number % divisor == 0:
		count += 1
print(count)