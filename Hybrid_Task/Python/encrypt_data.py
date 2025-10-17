number = input("Enter a four-digit number: ")
if int(number) < 1000 or int(number) > 9999:
	print("Invalid input!")

else: 
	inflation = []
	for digits in number :
		inflate = (int(digits) + 7) % 10
		inflation.append(inflate)

	rearrange = []
	rearrange.append(inflation[2])
	rearrange.append(inflation[3])
	rearrange.append(inflation[0])
	rearrange.append(inflation[1])


	encrypted = ""
	for elements in rearrange:
		encrypted += str(elements)
	
	print(encrypted)

