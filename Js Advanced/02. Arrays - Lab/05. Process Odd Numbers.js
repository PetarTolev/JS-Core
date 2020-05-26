function oddNumbers(arr) {
    return arr
        .filter((_, index) => { return index % 2 === 1 })
        .map(x => x * 2)
        .reverse()
        .join(' ');
}