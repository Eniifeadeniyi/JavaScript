const {turnOff,turnOn,changeGear,accelerate,decelerate,reset} = require("./Functions")
    let bike = {
        "isOn" : false,
        "speed" : 0,
        "gear" : 1,
    }
    
test("Test that bike can be turned on", () => {
    turnOn(bike);
    expect(bike.isOn).toBe(true);
    
})

test("Test that bike can be turned off", () => {
    reset(bike);
    turnOn(bike);
    turnOff(bike);
    expect(bike.isOn).toBe(false);
})

test("Test that bike can accelerate", () => {
    reset(bike);
    turnOn(bike);
    accelerate(bike);
    expect(bike.speed).toBe(1);
})

test("Test that bike only accelerates if on", () => {
    reset(bike);
    accelerate(bike);
    expect(bike.speed).toBe(0);
})

test("Test that bike can decelerate", () => {
    reset(bike);
    turnOn(bike);
    accelerate(bike);
    accelerate(bike);
    decelerate(bike);
    expect(bike.speed).toBe(1);
})

test("Test that bike doesn't decelerate if off", () => {
    reset(bike);
    turnOn(bike);
    accelerate(bike);
    turnOff(bike);
    decelerate(bike);
    expect(bike.speed).toBe(1);
})

test("Test that bike can't decelerate if speed is 0", () => {
    reset(bike);
    turnOn(bike);
    decelerate(bike);
    expect(bike.speed).toBe(0);
})

test("Test that gear automatically changes as speed increases and changes range", () => {
    reset(bike);
    turnOn(bike);
    for(let count = 0; count < 25; count++) {
        accelerate(bike);
    }
    expect(bike.gear).toBe(2);
})

test("Test that gear automatically changes as speed reduces and range changes", () => {
    reset(bike);
    turnOn(bike);
    for(let count = 0; count < 21; count++) {
        accelerate(bike);
    }
    decelerate(bike);
    expect(bike.gear).toBe(1);
})
