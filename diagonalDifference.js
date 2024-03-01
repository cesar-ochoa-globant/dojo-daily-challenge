function diagonalDifference(matrix) {
    let primarySum = 0;
    let secondarySum = 0;
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        primarySum += matrix[i][i];
        secondarySum += matrix[i][n - 1 - i];
    }

    return Math.abs(primarySum - secondarySum);
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];

console.log(diagonalDifference(matrix)); 
