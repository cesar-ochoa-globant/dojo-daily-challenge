function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let keysExamined = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        keysExamined++;

        if (arr[mid] === target) {
            return { index: mid, keysExamined: keysExamined };
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return { index: -1, keysExamined: keysExamined };
}

const numberList = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98];
const numberToFind = 48;

const result = binarySearch(numberList, numberToFind);
if (result.index !== -1) {
    console.log(`Number found in index: ${result.index}`);
    console.log(`Total Number of keys examined: ${result.keysExamined}`);
} else {
    console.log("Number not found");
}
