function solve(input) {
    let rows = input[0];
    let cols = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}