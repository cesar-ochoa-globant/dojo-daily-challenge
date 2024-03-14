function numberToEnglish(number) {
    const singleDigits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand", "million", "billion"];

    if (number === 0) return "zero";

    let words = "";
    let i = 0;

    const integerPart = Math.floor(number);
    const decimalPart = number % 1;

    if (integerPart > 0) {
        words += helper(integerPart, singleDigits, teens, tens, thousands);
    } else {
        words += singleDigits[0];
    }

    if (decimalPart > 0) {
        words += " point ";
        const decimalString = decimalPart.toFixed(2).slice(2);
        words += helper(parseInt(decimalString), singleDigits, teens, tens, thousands);
    }

    return words.trim();
}

function helper(number, singleDigits, teens, tens, thousands) {
    if (number === 0) {
        return "";
    } else if (number < 10) {
        return singleDigits[number] + " ";
    } else if (number < 20) {
        return teens[number - 10] + " ";
    } else if (number < 100) {
        return tens[Math.floor(number / 10)] + " " + helper(number % 10, singleDigits, teens, tens, thousands);
    } else if (number < 1000) {
        return singleDigits[Math.floor(number / 100)] + " hundred " + helper(number % 100, singleDigits, teens, tens, thousands);
    } else {
        let words = helper(Math.floor(number / 1000), singleDigits, teens, tens, thousands) + " thousand ";
        words += helper(number % 1000, singleDigits, teens, tens, thousands);
        return words;
    }
}

console.log(numberToEnglish(7)); 
console.log(numberToEnglish(575.21)); 
console.log(numberToEnglish(78193512.48));
