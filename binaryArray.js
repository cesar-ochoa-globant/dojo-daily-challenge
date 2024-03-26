function binaryArraySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === key) {
            return mid;
        }
        else if (key < arr[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return -1;
}

console.log(binaryArraySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
console.log(binaryArraySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 24));
