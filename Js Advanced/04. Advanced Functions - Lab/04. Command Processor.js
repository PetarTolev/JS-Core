function solution() {
    let myString = '';

    return {
        append: (str) => {myString += str},
        removeStart: (n) => {myString = myString.slice(n)},
        removeEnd: (n) => {myString = myString.slice(0,myString.length - n)},
        print: () => console.log(myString)
    }
}