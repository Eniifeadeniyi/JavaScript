numbers = [4,0,2,0,1,0,3]
rearrange = []
count = 0
for number in numbers:
	if number != 0:
		rearrange.append(number)
for number in numbers:
	if number == 0:
		count += 1
		rearrange.append(number)
print(rearrange)	
