sum = 0
for year in range(1900,2026):
	if year % 4 == 0 and year % 100 != 0:
		sum += 1

	if year % 4 == 0 and year % 100 == 0 and year % 400 == 0:
		sum += 1

print(sum)


