function findMatchingLines(text, words) {
    const lines = text.split('\n');
    
    const matchingLines = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (words.some(word => line.includes(word))) {
            matchingLines.push(`Line ${i + 1}: ${line}`);
        }
    }
    
    return matchingLines;
}

const text = `In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.
In analytic number theory, big O notation is often used to express a bound on the difference between an arithmetical function and
a better understood approximation; a famous example of such a difference is the remainder term in the prime number theorem. 
Big O notation is also used in many other fields to provide similar estimates.`;

console.log(findMatchingLines(text, ['notation']));
console.log(findMatchingLines(text, ['fields']));
console.log(findMatchingLines(text, ['requirements', 'similar']));
