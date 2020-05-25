const getSum = (arr) => {
    return arr.reduce((a, b) => a + b)
};

function isMatrixMagic(matrix) {
    const sum = getSum(matrix[0]);
    let res = true;

    for (let i = 0; i < matrix.length; i++) {
        let currentRowSum = getSum(matrix[i]);
        let currentColSum = matrix.reduce((acc, current, index) => {
            return acc += current[i];
        }, 0);

        if (sum !== currentRowSum || sum !== currentColSum) {
            res = false;
            break;
        }
    }

    return res;
}