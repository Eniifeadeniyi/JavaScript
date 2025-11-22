let start = false;
let currentFuel = 0.0;
let distanceMoved = 0.0;
let fuelEfficiency = 0.0;
let maximumDistance = 0.0;

function setFuelEfficiency(efficiency){
    if(efficiency > 0) fuelEfficiency = efficiency;
}

function setMaximumDistance(){
    if(fuelEfficiency > 0) maximumDistance = fuelEfficiency * 50;
}

function startCar() {
        start = true;
}

function stopCar(){
    start = false;
}

function addFuel(fuel) {
    if(currentFuel < 50.1 && fuel > 0 && fuel < 50.1) currentFuel += fuel;
}

function moveCar(distance){
    if(distance > 0 && distance <= maximumDistance) {
        distanceMoved += distance;
        let fuelUsed = distance / fuelEfficiency;
        currentFuel  -= fuelUsed;
    }
}

function getDistanceMoved(){
    return distanceMoved;
}

module.exports = addFuel,moveCar,getDistanceMoved,setFuelEfficiency,stopCar,startCar,setMaximumDistance;

