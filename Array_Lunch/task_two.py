def enter(satisfaction):
	return satisfaction[0]

def getSpecificCustomers(satisfaction):
	filtered = {}
	for key,value in satisfaction.items():
		if value >= 80:
			filtered[key] = value
	return filtered

def getSatisfactions(filtered):
	satisfactions = []	
	for key,value in filtered.items():
		satisfactions.append(value)
	return satisfactions


def sortSatisfactions(satisfactions):
	for count in range(len(satisfactions)): 
		for counter in range(len(satisfactions)):	
			if satisfactions[count] > satisfactions[counter]:
				temp = satisfactions[count]
				satisfactions[count] = satisfactions[counter]
				satisfactions[counter] = temp
	return satisfactions


def sortFiltered(filtered,satisfactions):
	sorted = {}
	for satisfaction in satisfactions:
		for key,value in filtered.items():
			if value == satisfaction: 
				sorted[key] = satisfaction
	return sorted

		


customersSatisfaction = [{
			"Tolu" : 100,
			"Ebuka" : 82,	
			"Martins" : 57,
			"Femi" : 69,
			"Stanley" : 70,
			"Eniife" : 89,
			"Nissi" : 80,
			"Moses" : 100 
}]

satisfaction = enter(customersSatisfaction);
filtered = getSpecificCustomers(satisfaction);
satisfactions = getSatisfactions(filtered);
satisfactions = sortSatisfactions(satisfactions);
print(sortFiltered(filtered,satisfactions));
