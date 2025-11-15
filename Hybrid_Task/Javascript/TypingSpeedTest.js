const prompt = require('prompt-sync')();

function getTime() {
	let date = new Date();
	let minutes = date.getSeconds();
	return minutes;
}

function calculateTimeSpent(start,end) {
	let time = end - start;
	return time;
}


function calculateWordsPerMinute(time,numberOfWords) {
	let minutes = time / 60;
	let speed = numberOfWords / minutes;
	return speed;
}

function getScorePerWord(expectedWords) {
	let scorePerWord = 100 / expectedWords.length;
	return scorePerWord;
}

function calculateAccuracy(scorePerWord,userInput,expectedWords){
	let score = 0;
	for(let count = 0; count < userInput.length; count++){
		if(userInput[count] == expectedWords[count]) score += scorePerWord;}
	return score;
}
	

let expected = "I am so tired!";
let expectedWords = expected.split(" ");

console.log(expected);
let startTime = getTime();
let sentence = prompt('Enter the sentence above: ');
let endTime = getTime();
let userInput = sentence.split(" ");

let scorePerWord = getScorePerWord(expectedWords);
let totalTime = calculateTimeSpent(startTime,endTime)


let numberOfWords = userInput.length;

console.log("You spent " + totalTime + " seconds!");
console.log("Your typing speed is "+ calculateWordsPerMinute(totalTime,numberOfWords) + "wpm");
console.log("Your typing accuracy is " + calculateAccuracy(scorePerWord,userInput,expectedWords) + "%");