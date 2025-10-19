
for number in range(1,1001):
	sum = 0
	for digit in str(number):
		#print(digit)
		power = int(digit) ** len(str(number))
		#print(power)
		#print(len(str(number)))
		sum += power
		#print(sum)

	if sum == int(number):
		print(number)


