word = "EniifE"
letters = "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
count = 0
for letter in word:
	for character in letters:
		if letter == character:
			count += 1

print(count)	