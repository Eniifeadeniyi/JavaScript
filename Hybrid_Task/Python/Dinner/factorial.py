number = int(input("Enter a number: "))

answer = 1

for count in range(1,number + 1):
	answer *= count

print(answer);