function swapInPairs(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const [first, second, ...rest] = arr;
        return [second, first, ...swapInPairs(rest)];
    }
}

console.log(swapInPairs([2, 7, 8, 3, 1, 4]));
console.log(swapInPairs([3, 6, 8, 1, 5]));
