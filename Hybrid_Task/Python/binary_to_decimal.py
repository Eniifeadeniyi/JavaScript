input = "1011"
answer = 0

power = len(input) - 1
for digit in input:
	number = int(digit) * (2 ** power)
	power -= 1
	answer += number	
print(answer)