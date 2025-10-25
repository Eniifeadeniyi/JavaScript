word = "table"
vowels = "a","A","e","E","i","I","o","O","u","U"

count = 0
for letter in word:
	for vowel in vowels:
		if letter == vowel:
			print(count)
		break	
	count += 1
		
