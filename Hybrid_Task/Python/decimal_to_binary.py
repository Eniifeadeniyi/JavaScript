input = 11

answer = " "

if input > 0:
	for divisor in range(2,3):
		input %= 2
		answer += str(input) 
print(answer)