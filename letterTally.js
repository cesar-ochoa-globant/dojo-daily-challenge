function letterTally(str) {
    if (str.length === 0) {
        return {};
    }

    const char = str[0];
    const restOfString = str.slice(1);

    const restTally = letterTally(restOfString);

    restTally[char] = (restTally[char] || 0) + 1;

    return restTally;
}

console.log(letterTally('potato'));
console.log(letterTally('hello'));
console.log(letterTally('banana'));
