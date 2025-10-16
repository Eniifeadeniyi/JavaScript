input = 11

answer = " "

count = 0
while(input != 0) :
	remainder = input % 2
	input = input // 2	
	answer = str(remainder) + answer
	count += 1
print(answer)