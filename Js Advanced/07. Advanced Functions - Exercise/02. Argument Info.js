function solve(...params) {
    let types = {};

    for (const a of params) {
        let type = typeof(a);
        if (!types.hasOwnProperty(type)) {
            types[type] = 0;
        }

        types[type] += 1;
        console.log(`${type}: ${a}`);
    }

    Object.entries(types)
        .sort((a, b) => b[1] - a[1])
        .map(e => console.log(`${e[0]} = ${e[1]}`));
}