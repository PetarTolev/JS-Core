function rotate(arr) {
    let n = +arr.pop();

    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(' ');
}