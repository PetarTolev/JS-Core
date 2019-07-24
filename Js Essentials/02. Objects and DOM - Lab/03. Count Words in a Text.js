function solve(input) {
    let splitFilter = /\W/;
    let words = input[0].split(splitFilter).filter(x => x.length > 0);

    let obj = {};

    for (const word of words) {
        if (!obj[word]) {
            obj[word] = 0;
        }

        obj[word]++;
    }

    console.log(JSON.stringify(obj));
}