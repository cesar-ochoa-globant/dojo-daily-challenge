function commonCharacters(...strings) {
    const charSets = strings.map(str => new Set(str));
    const charCounts = {};
    
    for (const charSet of charSets) {
        for (const char of charSet) {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }
    }
    
    let result = '';
    
    for (const char in charCounts) {
        if (charCounts[char] === strings.length) {
            result += char.repeat(charCounts[char]);
        }
    }
    
    return result;
}

console.log(commonCharacters('acexivou', 'aegihobu')); 
console.log(commonCharacters('abc', 'abcx')); 
