function solve(input) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {

        let currentBigNumber = Math.max(...input[i]);

        if (biggestNumber < currentBigNumber) {
            biggestNumber = currentBigNumber
        }
    }

    console.log(biggestNumber);
}