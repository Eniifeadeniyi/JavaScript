encrypted_number = input("Enter encrypted number: ")

deflation = []
for digit in encrypted_number:
	deflate = ((int(digit) - 7) + 10) % 10
	deflation.append(deflate)

rearrange = []
rearrange.append(deflation[2])
rearrange.append(deflation[3])
rearrange.append(deflation[0])
rearrange.append(deflation[1])

decrypted = ""
for elements in rearrange:
	decrypted += str(elements)
print(decrypted)


