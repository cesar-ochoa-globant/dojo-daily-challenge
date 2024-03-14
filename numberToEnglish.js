function numberToEnglish(number) {
    const singleDigits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand", "million", "billion"];

    if (number === 0) return "zero";

    let words = "";
    let i = 0;

    while (number > 0) {
        if (number % 1000 !== 0) {
            words = helper(number % 1000) + thousands[i] + " " + words;
        }
        number = Math.floor(number / 1000);
        i++;
    }

    return words.trim();
}

function helper(number) {
    switch (true) {
        case number === 0:
            return "";
        case number < 10:
            return singleDigits[number] + " ";
        case number < 20:
            return teens[number - 10] + " ";
        case number < 100:
            return tens[Math.floor(number / 10)] + " " + helper(number % 10);
        default:
            return singleDigits[Math.floor(number / 100)] + " hundred " + helper(number % 100);
    }
}

console.log(numberToEnglish(7)); 
console.log(numberToEnglish(575)); 
console.log(numberToEnglish(78193512)); 
