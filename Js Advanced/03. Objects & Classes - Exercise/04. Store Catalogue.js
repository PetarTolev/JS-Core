function storeCatelogue(input) {
    let res = {};

    for (const el of input) {
        const [name, price] = el.split(' : ');
        const letter = name[0];

        if (!res.hasOwnProperty(letter)) {
            res[letter] = [];
        }

        res[letter].push({ name, price });
    }

    function print(letter, elements) {
        console.log(letter);
        for (const el of elements) {
            console.log(`  ${el.name}: ${el.price}`);
        }
    }

    Object.keys(res).sort().forEach(key => {
        print(key, res[key].sort((a, b) => a.name.localeCompare(b.name)))
    });
}