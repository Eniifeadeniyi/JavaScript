const {validate,checkCardType,checkValidityOfBothSums,sumBothSums,doubleEverySecondDigit,doubleOtherDigits} = require("./Functions")

test("Test that checkCardType is working", () => {
    expect(checkCardType("3788576018402626")).toBe("American Express Card");
})
