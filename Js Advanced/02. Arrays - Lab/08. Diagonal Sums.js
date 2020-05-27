function diagonaSum(arr) {
    return arr
        .reduce(
            (acc, current, index) => {
                acc[0] += current[index];
                acc[1] += current[arr.length - index - 1];
                return acc;
            }, [0, 0])
        .join(' ');
}