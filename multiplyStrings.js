function multiplyStrings(num1, num2) {
    const m = num1.length;
    const n = num2.length;
    const result = Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1];

            result[i + j] += Math.floor(sum / 10);
            result[i + j + 1] = sum % 10;
        }
    }

    while (result[0] === 0 && result.length > 1) {
        result.shift();
    }

    return result.join('');
}

// Test cases
console.log(multiplyStrings("2", "3")); // Output: "6"
console.log(multiplyStrings("123", "456")); // Output: "56088"
