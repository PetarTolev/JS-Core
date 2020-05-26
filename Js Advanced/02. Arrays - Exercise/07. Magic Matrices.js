function isMatrixMagic(matrix) {
    const getSum = (arr) => {
        return arr.reduce((a, b) => a + b)
    };

    const sum = getSum(matrix[0]);
    let res = true;

    for (let i = 0; i < matrix.length; i++) {
        let currentRowSum = getSum(matrix[i]);
        let currentColSum = matrix.reduce((acc, current) => {
            return acc += current[i];
        }, 0);

        if (sum !== currentRowSum || sum !== currentColSum) {
            res = false;
            break;
        }
    }

    return res;
}