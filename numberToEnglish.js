function numberToEnglish(number) {
    const singleDigits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand", "million", "billion"];

    if (number === 0) return "zero";

    if (number < 0) {
        return "negative " + numberToEnglish(-number);
    }

    const integerPart = Math.floor(number);
    const decimalPart = number - integerPart;

    let integerWords = "";
    let i = 0;
    while (integerPart > 0) {
        if (integerPart % 1000 !== 0) {
            integerWords = helper(integerPart % 1000) + thousands[i] + " " + integerWords;
        }
        integerPart = Math.floor(integerPart / 1000);
        i++;
    }

    let decimalWords = "";
    if (decimalPart > 0) {
        decimalWords = "point ";
        for (let digit of decimalPart.toString().split("").slice(2)) {
            decimalWords += singleDigits[parseInt(digit)] + " ";
        }
    }

    return (integerWords + decimalWords).trim();
}

function helper(number) {
    if (number === 0) {
        return "";
    } else if (number < 10) {
        return singleDigits[number] + " ";
    } else if (number < 20) {
        return teens[number - 10] + " ";
    } else if (number < 100) {
        return tens[Math.floor(number / 10)] + " " + helper(number % 10);
    } else {
        return singleDigits[Math.floor(number / 100)] + " hundred " + helper(number % 100);
    }
}

console.log(numberToEnglish(7)); 
console.log(numberToEnglish(575)); 
console.log(numberToEnglish(78193512)); 
console.log(numberToEnglish(123.456)); 