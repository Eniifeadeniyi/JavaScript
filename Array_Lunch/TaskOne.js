/*
function filter_invalid_numbers(numbers) {
	let valid_numbers = []
	for(let number of numbers) {
		if(number < 6 && number > 0) valid_numbers.push(number);}
	return valid_numbers;
}


let numbers = [1,2,3,4,5,0,0,6,2,2,2,5,6]
console.log(filter_invalid_numbers(numbers))
*/



function getSpecificData(customers) {
	let filtered = []
	for(let object of customers) {	
		for(let score in object) {
			if(object[score] >= 80) filtered.push(object);
		}
	}
	return filtered;
}

function getScoresOnly(filtered) {
	let scores = []
	for(let object of filtered) {
		for(let key in object) {
			if(key == "score") { scores.push(object[key]);}
		}
	}
	return scores;
}

function sortScores(scores) { 
	for(let count = 0; count < scores.length; count++) {
		for(let counter = 0; counter < scores.length; counter++) {	
			if(scores[count] > scores[counter]) {
				let temp = scores[count];
				scores[count] = scores[counter];
				scores[counter] = temp;}
	}
	}
	return scores;
}

function getPeopleOnly(filtered) {
	let people = []
	for(let object of filtered) {
		for(let key in object) {
			if(key == "name") { people.push(object[key]);}
		}
	}
	return people;
}

function getPositions(scores,filtered) {
	let sortedPeople = []
	for(let object of filtered) {
		for(let key of object) {
			filtered.find()
		}
	}
}
			 
let customers = [{name : "Femi", score : 80}, {name : "Fola", score : 40}, {name : "Eniife", score : 100}, {name : "Martins", score : 79}, {name : "Ebuka", score : 88}]

let filtered = getSpecificData(customers);
let scores = getScoresOnly(filtered);
let scores1 = []
for(let score of scores){
	scores1.push(score);}
scores = sortScores(scores);

console.log(scores1);
console.log(getPeopleOnly(filtered));