word = "EniifE"
letters = "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
count = 0
for letter in word:
	for character in letters:
		if letter == character:
			count += 1

print(count)	