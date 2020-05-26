function sortNums(arr) {
    arr.reduce((_, current, index, a) => {
        if (current < 0) {
            a.unshift(+a.splice(index, 1))
        }
    }, 0);

    console.log(arr.join('\n'));
}