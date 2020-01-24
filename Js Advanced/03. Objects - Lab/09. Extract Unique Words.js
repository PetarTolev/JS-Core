function solve(input) {
    console.log(
        [...new Set(input
            .join('')
            .toLowerCase()
            .match(/\w+/gim))]
        .join(', '));
}