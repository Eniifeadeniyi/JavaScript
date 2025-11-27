let bike = {
    "isOn" : false,
    "gear" : 1,
    "speed" : 0,
}

function reset(bike){
    bike.isOn = false;
    bike.gear = 1;
    bike.speed = 0;
} 

function turnOn(bike){
    bike.isOn = true;
}

function turnOff(bike){
    bike.isOn = false;
}

function accelerate(bike){
    if(bike.isOn == true){
        changeGear(bike);
        if(bike.gear == 1) bike.speed += 1;
        else if(bike.gear == 2) bike.speed += 2;
        else if(bike.gear == 3) bike.speed += 3;
        else if(bike.gear == 4) bike.speed += 4;
        changeGear(bike);
    }
}

function decelerate(bike){
    if(bike.isOn == true && bike.speed > 0){
        changeGear(bike);
        if(bike.gear == 1) bike.speed -= 1;
        else if(bike.gear == 2) bike.speed -= 2;
        else if(bike.gear == 3) bike.speed -= 3;
        else if(bike.gear == 4) bike.speed -= 4;
        changeGear(bike);
    }
}

function changeGear(bike){
    if(bike.speed > - 1 && bike.speed < 21) bike.gear = 1;
    else if(bike.speed > 20 && bike.speed < 31) bike.gear = 2;
    else if(bike.speed > 30 && bike.speed < 41) bike.gear = 3;
    else bike.gear = 4;
}


module.exports = {turnOff,turnOn,accelerate,decelerate,reset} 
