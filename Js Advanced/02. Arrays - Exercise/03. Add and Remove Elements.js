function addAndRemove(arr) {
    let res = arr
        .reduce((acc, current, i) => {
            current === 'remove' ? acc.pop() : acc.push(i + 1);
            return acc;
        }, [])
        .join('\n');

    if (res.length < 1) {
        return 'Empty';
    }

    return res;
}