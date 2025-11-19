const prompt = require('prompt-sync')();
record = {}
let usedUsernames = []

let months = {"January" : 31,
	      "February" : 29, 
	      "March" : 31, 
	      "April" : 30, 
	      "May" : 31, 
 	      "June" : 30, 
	      "July" : 31, 
	      "August" : 31, 
	      "September" : 30, 
	      "October" : 31, 
	      "November" : 30, 
	      "December" : 31};

function validateDate(date,month) {
	if(date > 0) {
		if(date <= months[month]) return true;
		else return false;}
		
	else return false;
}

let numbers = ["0","1","2","3","4","5","6","7","8","9"];
function validateNumberInput(number) {
	if(number.length == 0) return false;
	let result = []
	for(let digit of number) {
		if(numbers.includes(digit)) result.push(true);
		else result.push(false);}
	if(result.includes(false)) return false;
	else return true;
}

function validateHour(hour) {
	if(validateNumberInput(hour)) {
		if(Number(hour) >= 0 && Number(hour) <= 23) return true;
		else return false;
		}
	else return false;
}

function validateMinutes(minute) {
	if(validateNumberInput(minute)) {
		if(Number(minute) >= 0 && Number(minute) <= 59) return true;
		else return false;
		}
	else return false;
}

function makeUser(username) {
	if(!usedUsernames.includes(username.toLowerCase())) {
		record[username] = {"EventNames" : [], "Dates" : [], "StartTimes" : [], "EndTimes" : [], "Occupied" : {"" : []}}
		usedUsernames.push(username.toLowerCase())
		return(username + " successfully added to record!");}
	else return("Username already in use!");
}

function get(key, record, errorMessage) {
	if(key in record) return record[key];
	else return errorMessage;
}

function checkEvents(event,record) {
	if(record["EventNames"].includes(event)) return true;
	else return false;
}

function addEvent(username,eventname) {
	let user = record[username]
	user["EventNames"].push(eventname);
	return "Event successfully added for " + username;
}

function addStartTime(username,array) {
	let user = record[username]
	user["StartTimes"].push(array.join(":"));
	return "Start time successfully added for " + username;
}

function addEndTime(username,array) {
	let user = record[username]
	user["EndTimes"].push(array.join(":"));
	return "End time successfully added for " + username;
}

function showEvents(username) {
	return get(username,record, "Username doesn't exist!");
}

let menu = `
	1. Add user.
	2. Add event for user.
	3. View user's schedule.
	4. Remove event for user.
	5. exit
	`;

let choice = " ";
while(choice != "5") {
	console.log(menu);
	choice = prompt('Enter an operation: ');
	switch (choice) {
		case "1" : {
			let username = prompt("Enter unique name for user: ");
			console.log(makeUser(username));
			break;}

		case "2" : {
			if(usedUsernames.length != 0) {
				let username = prompt("Enter username: ");
				let check = get(username,record,"Username doesn't exist!");
				if(check != "Username doesn't exist!"){
					let event = prompt("Enter event name: ");
					console.log(addEvent(username,event));
					let start = prompt("Enter start time: ");
					let startArray = start.split(":");

					while(startArray.length != 2 || !validateHour(startArray[0]) || !validateMinutes(startArray[1])) {	
						console.log("Invalid input!")
						start = prompt("Enter start time: ");
						startArray = start.split(":");}				
					
					console.log(addStartTime(username,startArray)); 	

					let end = prompt("Enter end time: ");
					let endArray = end.split(":");

					while(endArray.length != 2 || !validateHour(endArray[0]) || !validateMinutes(endArray[1]) || Number(endArray[0]) * 60 + Number(endArray[1]) <= Number(startArray[0]) * 60 + Number(startArray[1])) {
						console.log("Invalid input!")
						end = prompt("Enter end time: ");
						endArray = end.split(":");}					
						
					console.log(addEndTime(username,endArray)); 					
					}
				else console.log(check)
				}
			else console.log("Enter a user first!");
			break;}

		case "3" : {
			if(usedUsernames.length != 0) {
				let username = prompt("Enter username: ");
				console.log(showEvents(username));}
			else console.log("Enter a user first!");
			break;}

		case "5" :
			console.log("Goodbye!");
			break;
		default : 
			console.log("Unsupported operation!");}
}