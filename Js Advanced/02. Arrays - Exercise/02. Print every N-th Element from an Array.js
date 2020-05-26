function printNthElement(arr) {
    let n = arr.pop();

    return arr
        .filter((_, index) => {
            return index % n === 0;
        })
        .join('\n')
}