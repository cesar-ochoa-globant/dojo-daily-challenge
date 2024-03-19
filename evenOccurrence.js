function evenOccurrence(arr) {
    const occurrences = {};

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        occurrences[item] = (occurrences[item] || 0) + 1;
    }

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (occurrences[item] % 2 === 0) {
            return item;
        }
    }

    return null;
}

console.log(evenOccurrence([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9]));
console.log(evenOccurrence([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]));
