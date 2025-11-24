const add = require("./Functions");
test("Test that distance changed", () => {
    moveCar(50)
    expect(getDistanceMoved()).toBe(50);

})