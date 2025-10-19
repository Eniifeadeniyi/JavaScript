number_one = int(input("Enter a number: "))
number_two = int(input("Enter another number: "))

max = max(number_one,number_two)
min = min(number_one,number_two)

divisor = 2 
greatest = 1

while divisor <= max:
	if max % divisor == 0 and min % divisor == 0:
		if divisor > greatest:
			greatest = divisor
		
			
	divisor += 1

print(greatest)

