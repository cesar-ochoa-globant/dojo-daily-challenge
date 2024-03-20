function deepEquals(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key) || !deepEquals(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

console.log(deepEquals({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(deepEquals({ a: 1, b: 2 }, { a: 1, b: 3 }));
