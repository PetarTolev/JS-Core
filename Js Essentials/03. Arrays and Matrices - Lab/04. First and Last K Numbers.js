function solve(input) {
    let k = input.shift();

    let result = [];

    for (let i = 0; i < k; i++) {
        result.push(input[i]);
    }

    console.log(result.join(' '));

    result = [];

    for (let i = input.length - k; i < input.length; i++) {
        result.push(input[i])
    }

    console.log(result.join(' '));
}