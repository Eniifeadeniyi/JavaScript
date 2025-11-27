const {validate,checkCardType,checkValidityOfBothSums,sumBothSums,doubleEverySecondDigit,doubleOtherDigits} = require("./Functions")
const prompt = require('prompt-sync')();

let cardNumber = prompt("Hello, kindly enter card details to verify: ");
while(!(validate(cardNumber))){
    console.log("Invalid input!")
    cardNumber = prompt("Hello, kindly enter card details to verify: ");
}

if(cardNumber.length > 12 && cardNumber.length < 17){
    console.log("Credit Card Type: " + checkCardType(cardNumber));
    console.log("Credit Card Number: " + cardNumber);
    console.log("Credit Card Digit Length: " + cardNumber.length);
    if(checkCardType(cardNumber) != "Unknown") console.log("Credit Card Validity Status: " + checkValidityOfBothSums(cardNumber));
    else console.log("Credit Card Validity Status: Invalid")
}

else {
     console.log("Credit Card Number: " + cardNumber);
    console.log("Credit Card Digit Length: " + cardNumber.length);
    console.log("Credit Card Validity Status: Invalid");
}

