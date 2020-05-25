function diagonaSum(arr) {
    return arr.reduce((acc, current, index) => {
        acc.d1 += current[index];
        acc.d2 += current[arr.length - index - 1];
        return acc;
    }, { d1: 0, d2: 0 })
}