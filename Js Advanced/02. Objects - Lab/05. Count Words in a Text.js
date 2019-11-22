function solve(input) {
    let words = input[0]
        .split(/\W/)
        .filter(x => x.length > 0);

    let obj = {};

    for (const word of words) {
        if (!obj[word]) {
            obj[word] = 0;
        }

        obj[word]++;
    }

    console.log(JSON.stringify(obj));
}