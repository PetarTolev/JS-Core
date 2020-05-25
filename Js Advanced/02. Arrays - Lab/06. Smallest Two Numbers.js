function smallestNumbers(arr) {
    return arr
        .sort((a, b) => a - b)
        .splice(0, 2)
        .join(' ');
}