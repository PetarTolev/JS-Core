function solution() {
    let string = '';

    return {
        append: value => string += value,
        removeStart: n => string = string.slice(n),
        removeEnd: n => string = string.slice(0, string.length - n),
        print: () => console.log(string)
    };
}