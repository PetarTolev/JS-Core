function solve(row, col){

    let matrix = [];
    
    for (let i = 0; i < row; i++) {
        matrix[i] = [];
    }

    let currentNum = 1;

    let startCol = 0;
    let endCol = col - 1;
    let startRow = 0;
    let endRow = row - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = currentNum;
            currentNum++;
        }

        startRow++
        
        for (let row = startRow; row <= endRow; row++) {
            matrix[row][endCol] = currentNum;
            currentNum++;
        }

        endCol--;

        for (let col = endCol; col >= startCol; col--) {
            matrix[endRow][col] = currentNum;
            currentNum++;
        }

        endRow--;

        for (let row = endRow; row >= startRow; row--) {
            matrix[row][startCol] = currentNum;
            currentNum++;
            
        }

        startCol++;
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}