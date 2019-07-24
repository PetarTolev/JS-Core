function solve(n, k) {
    let sequence = [];
    sequence.push(1);

    for (let i = 1; i < n; i++) {
        let sum = 0;

        if (i < k) {
            sum = sequence.slice(0, i).reduce((a, b) => a + b);
        }
        else {
            sum = sequence.slice(i - k, i).reduce((a, b) => a + b);   
        }
        sequence.push(sum)
    }

    console.log(sequence.join(' '));
}