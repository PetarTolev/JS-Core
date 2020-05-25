function numberSequence(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let start = i - k < 0 ? 0 : i - k;

        arr.push(
            +arr.slice(start, i).reduce((a, b) => { return a + b; }, 0)
        );
    }

    console.log(arr.join(' '));
}