function characterFrequency(str) {
    const frequencyMap = {};

    for (let char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    const frequencyArray = Object.entries(frequencyMap);

    frequencyArray.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    return frequencyArray;
}

console.log(characterFrequency('mississippi')); 
console.log(characterFrequency('miaaiaaippi')); 
console.log(characterFrequency('mmmaaaiiibbb')); 