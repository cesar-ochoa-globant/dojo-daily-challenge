function splitByPivot(arr, pivot) {
    if (arr.length === 0) {
        return [[], []];
    }

    const first = arr[0];
    
    const [smaller, greaterOrEqual] = splitByPivot(arr.slice(1), pivot);

    if (first < pivot) {
        return [[first, ...smaller], greaterOrEqual];
    } else {
        return [smaller, [first, ...greaterOrEqual]];
    }
}

console.log(splitByPivot([2, 7, 8, 3, 1, 4], 4)); 
