function validate(input){
    let output = [];
    let valid = ["1","2","3","4","5","6","7","8","9","0"]
    for(let element of input){
        if(valid.includes(element)) output.push(true);
        else output.push(false);
    }
    if(output.includes(false)) return false;
    else return true;
}
function setMaximumDistance(fuelEfficiency){
    let maximumDistance = 0.0
    if(fuelEfficiency > 0) maximumDistance = fuelEfficiency * 50
    return maximumDistance;
}

function startCar(){
    return true;
}

function stopCar(){
    return false;
}

function addFuel(currentFuel,fuel){
    if(currentFuel < 50.1 && fuel > 0 && fuel < 50.1 && (currentFuel + fuel) < 50.1) currentFuel += fuel
    return currentFuel;
}

function moveCar(distance,maximumDistance,currentFuel,fuelEfficiency,distanceMoved){
    if(distance > 0 && distance <= maximumDistance){
        distanceMoved += distance
        fuelUsed = distance / fuelEfficiency
        currentFuel  -= fuelUsed;
    }
    return {distanceMoved, currentFuel};
}

module.exports = {moveCar,addFuel,startCar,stopCar, setMaximumDistance,validate}
