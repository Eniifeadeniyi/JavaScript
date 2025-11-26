const {moveCar,addFuel,startCar,stopCar, setMaximumDistance,validate} = require("./Functions")

const prompt = require('prompt-sync')();
let efficiency = prompt('Enter fuel efficiency: ');
while(!(validate(efficiency))) {
    console.log("Invalid input!")
    efficiency = prompt('Enter fuel efficiency: ');
}
efficiency = Number(efficiency);
setFuelEfficiency(efficiency);
setMaximumDistance();

let menu = `
    1. Start Car
    2. Move Car
	3. Check Fuel
	4. Increase Fuel
	5. Stop Car
`
let operation = "";
while(operation != 5){
    console.log(menu)
    operation = prompt("Enter an operation: ");
    switch(operation){
        case "1": 
            {
                startCar()
                break;
            }
        case "2":
            {
                if(start == true && currentFuel > 0.0){
                let distance = prompt("Enter distance: ");
                if(validate(distance)) {
                    distance = Number(distance);
                    moveCar(distance)
                    console.log("Moved " + distance + " kilometers")
                    console.log("Moved a total of " + getDistanceMoved() + " kilometers");
                }
                else console.log("Invalid input!")
                }
                else console.log("Start and refuel car first!");
                break;
            }
        case "3":{
            console.log(checkFuelLevel());
            break;
            }
        case "4":{
            let fuel = prompt("Enter fuel amount: ");
            if(validate(fuel)){
                fuel = Number(fuel)
                addFuel(fuel) 
            }
            break;            
            }
        case "5":{
            stopCar()
            break;
            }
        default : console.log("Invalid input!")

    }
}


