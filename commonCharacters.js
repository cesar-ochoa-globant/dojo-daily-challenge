function commonCharacters(...strings) {
    const counts = {};
    
    for (const char of strings[0]) {
        counts[char] = (counts[char] || 0) + 1;
    }
    
    for (let i = 1; i < strings.length; i++) {
        const currentCounts = {};
        for (const char of strings[i]) {
            if (counts[char]) {
                currentCounts[char] = (currentCounts[char] || 0) + 1;
            }
        }
        for (const char in counts) {
            counts[char] = Math.min(counts[char], currentCounts[char] || 0);
        }
    }
    
    let result = '';
    for (const char in counts) {
        result += char.repeat(counts[char]);
    }
    
    return result;
}

console.log(commonCharacters('acexivou', 'aegihobu')); 
console.log(commonCharacters('abc', 'abcx'));
