function printNthElement(arr) {
    let n = arr.splice(arr.length - 1);

    return arr
        .filter((el, index) => {
            return index % n === 0;
        })
        .join('\n')
}