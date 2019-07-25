function solve(input) {
    let matrix = [];

    for (const line of input) {
        matrix.push(line.split(' ').map(x => Number(x)));
    }

    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0

    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += matrix[i][i];
    }

    let row = 0;
    let col = matrix.length - 1;

    while (row !== matrix.length) {
        rightDiagonalSum += matrix[row][col];

        row++;
        col--;
    }

    if (leftDiagonalSum == rightDiagonalSum) {
        let matrixCopy = [];

        for (let i = 0; i < matrix.length; i++) {
            matrixCopy[i] = Array(matrix.length).fill(leftDiagonalSum);

            matrixCopy[i][i] = matrix[i][i];
        }

        row = 0;
        col = matrix.length - 1;

        while (row !== matrix.length) {
            matrixCopy[row][col] = matrix[row][col];

            row++;
            col--;
        }

        matrix = matrixCopy;
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}