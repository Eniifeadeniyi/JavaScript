const {moveCar,addFuel,startCar,stopCar, setMaximumDistance,validate} = require("./Functions")
test("Test that you can start car", () => {
    expect(startCar()).toBe(true);
})

test("Test that you can stop car", () => {
    expect(stopCar()).toBe(false);
})

test("Test that you can add fuel", () => {
    expect(addFuel(50)).toBe(50);
})

test("Test that you can't add more than 50 fuel", () => {
    expect(addFuel(47.5,4)).toBe(47.5);
})

test("Test that validate works", () => {
    expect(validate("22")).toBe(true);
})

test("Test that you can move car, and the fuel reduces", () => {
    let object = moveCar(50,1000,50,20,0);
    expect(object["currentFuel"]).toBe(47.5)
    expect(object["distanceMoved"]).toBe(50);
})