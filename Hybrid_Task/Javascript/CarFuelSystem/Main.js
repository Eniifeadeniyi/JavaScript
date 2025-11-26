const prompt = require('prompt-sync')();
const {moveCar,addFuel,startCar,stopCar,setMaximumDistance,validate} = require("./Functions");
let efficiency = prompt("Enter fuel efficiency: ");

while(!(validate(efficiency))){
    console.log("Invalid input");
    efficiency = prompt("Enter fuel efficiency: ");
}

efficiency = Number(efficiency)
let maximum = setMaximumDistance(efficiency)
let distanceMoved = 0.0
let start = false
let totalFuel = 0.0

let menu = `
    1. Start Car
    2. Check Fuel level
    3. Add fuel
    4. Move Car
    5. Stop Car
`
let operation = ""
while(operation != "5"){
    console.log(menu)
    operation = prompt("Enter your choice: ")
    switch(operation){
        case "1": {
            start = startCar();
            break;
        }
        case "2": {
            console.log(addFuel(totalFuel));
            break;
        }
        case "3": {
            let fuel = prompt("Enter fuel amount: ");
            while(!(validate(fuel))){
                console.log("Invalid input");
                fuel = prompt("Enter fuel amount: ");
            }
            fuel = Number(fuel);
            totalFuel = addFuel(totalFuel,fuel);
            break;
        }
        case "4": {
            if(totalFuel > 0.0 && start == true){
                let distance = prompt("Enter distance: ")
                while(!(validate(distance))){
                    console.log("Invalid input");
                    distance = prompt("Enter distance: ");
                }
                distance = Number(distance)
                distanceMoved, totalFuel = moveCar(distance, maximum, totalFuel, efficiency,distanceMoved)
                console.log("Moved " + distance + " kilometers");
                console.log("Moved a total of " + distanceMoved + " kilometers successfully");
            }
            else console.log("Start car and add fuel first!");
            break;
        }
        case "5": {
            start = stopCar();
            break;
        }
        default : {
            console.log("Invalid input");
        }
    }
}


