function checkCardType(cardNumber){
    let firstNumber = cardNumber[0];
    let secondNumber = cardNumber[1];
    let cardType = "Unknown";
    switch(firstNumber){
        case "4" :{
            cardType = "Visa Card";
            break;
        }
        case "5":{
            cardType = "MasterCard";
            break;
        }
        case "3":{
            if(secondNumber == "7") cardType = "American Express Card";
            break;
        }
        case "6":{
            cardType = "Discover Card";
            break;
        }
    }
    return cardType;
}

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

function doubleEverySecondDigit(cardNumber){
    let sum = 0;
    for(let count = cardNumber.length - 2; count > -1; count -= 2){
        let number = Number(cardNumber[count]);
        let multiple = number * 2;
        if(multiple < 10) sum += multiple;
        if(multiple >= 10) {
            let digitSum = (multiple / 10) + (multiple % 10)
            sum += digitSum;
        }
    }
    return sum;
}

function doubleOtherDigits(cardNumber){
    let sum = 0
    for(let count = cardNumber.length - 1; count > -1; count -= 2){
        let number = Number(cardNumber[count]);
        sum += number;
    }
    return sum;
}

function sumBothSums(cardNumber){
    let sumA = doubleEverySecondDigit(cardNumber);
    let sumB = doubleOtherDigits(cardNumber);
    let total = sumA + sumB;
    return total;
}

function checkValidityOfBothSums(cardNumber){
    let total = sumBothSums(cardNumber) 
    if(total % 10 == 0) return "Valid";
    else return "Invalid";
}

module.exports = {validate,checkCardType,checkValidityOfBothSums,sumBothSums,doubleEverySecondDigit,doubleOtherDigits}