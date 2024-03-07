function sumList(list, index = 0) {
    if (index === list.length) {
        return 0;
    } else {
        return list[index] + sumList(list, index + 1);
    }
}

const myList = [2, 7, 8, 3, 1, 4];
console.log(sumList(myList));
