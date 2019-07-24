function solve(input) {
    let result = 0;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            let currentElement = input[row][col];

            if (row + 1 < input.length) {
                if (currentElement === input[row + 1][col]) {
                    result++;
                }
            }

            if (col + 1 < input[row].length) {
                if (currentElement === input[row][col + 1]) {
                    result++;
                }
            }
        }
    }

    console.log(result);
}