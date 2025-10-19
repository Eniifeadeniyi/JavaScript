number_one = int(input("Enter a number: "))
number_two = int(input("Enter another number: "))

multiple = 1

while multiple != 0:
	if multiple % number_one != 0 or multiple % number_two != 0:
		multiple += 1
	if multiple % number_one == 0 and multiple % number_two == 0:
		break

print(multiple)

