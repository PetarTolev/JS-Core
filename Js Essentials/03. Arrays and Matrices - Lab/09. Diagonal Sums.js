function solve(input){
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let i = 0; i < input.length; i++) {
        leftDiagonalSum += input[i][i];
    }

    let row = input.length - 1;
    let col = 0;

    while (true) {
        rightDiagonalSum += input[row][col];
        row--;
        col++;

        if (col == input.length) {
            break;
        }
    }

    console.log(`${leftDiagonalSum} ${rightDiagonalSum}`);
}