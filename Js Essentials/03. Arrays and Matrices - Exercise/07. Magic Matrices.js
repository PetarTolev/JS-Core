function solve(input) {
    let sum = input[0].reduce((a, b) => a + b);

    for (let row = 1; row < input.length; row++) {
        let currentSum = input[row].reduce((a, b) => a + b, 0);

        if (sum !== currentSum) {
            return false;
        }
    }

    for (let row = 0; row < input.length; row++) {
        let currentSum = 0;

        for (let col = 0; col < input.length; col++) {
            currentSum += input[col][row];
        }

        if (currentSum !== sum) {
            return false;
        }
    }

    return true;
}