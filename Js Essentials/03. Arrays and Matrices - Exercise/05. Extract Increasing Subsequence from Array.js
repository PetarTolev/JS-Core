function solve(input) {
    let n = Number.MIN_SAFE_INTEGER;

    for (const num of input) {
        if (Number(num) >= n) {
            console.log(num);
            n = Number(num);
        }
    }
}