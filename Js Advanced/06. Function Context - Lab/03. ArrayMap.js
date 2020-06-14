function arrayMap(arr, fn) {
    return arr.reduce((acc, curr) => {
        return acc.concat(fn.call(this, curr));
    }, [])
}