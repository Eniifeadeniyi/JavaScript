//2
function enter(satisfaction) { 
	return satisfaction[0];
}
function getSpecificCustomers(satisfaction) {
	let filtered = {};
	for(let customer in satisfaction) {
		if(satisfaction[customer] >= 80) filtered[customer] = satisfaction[customer];
	}
	return filtered;
}

function getSatisfactions(filtered) {
	let satisfactions = [];
	
	for(let customer in filtered) {
		satisfactions.push(filtered[customer]);
		}
	return satisfactions;
}

function sortSatisfactions(satisfactions) {
	for(let count = 0; count < satisfactions.length; count++) {
		for(let counter = 0; counter < satisfactions.length; counter++) {	
		if(satisfactions[count] > satisfactions[counter]) {
			let temp = satisfactions[count];
			satisfactions[count] = satisfactions[counter];
			satisfactions[counter] = temp;}
	}
	}
	return satisfactions;
}

function sortFiltered(filtered,satisfactions) {
	sorted = {}
	for(let satisfaction of satisfactions) {
		for(let customer in filtered) {
			if(filtered[customer] == satisfaction) sorted[customer] = satisfaction;
		}
	}
	return sorted;
}
		


let customersSatisfaction = [{
			"Tolu" : 50,
			"Ebuka" : 82,	
			"Martins" : 57,
			"Fola" : 69,
			"Stanley" : 70,
			"Eniife" : 89,
			"Nissi" : 80,
			"Moses" : 100 
}];

customersSatisfaction = enter(customersSatisfaction);
let filtered = getSpecificCustomers(customersSatisfaction);
let satisfactions = getSatisfactions(filtered);
satisfactions = sortSatisfactions(satisfactions);
console.log(sortFiltered(filtered,satisfactions));
