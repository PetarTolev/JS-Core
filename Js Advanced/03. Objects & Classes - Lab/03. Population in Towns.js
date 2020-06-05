function solve(arr) {
    let res = arr.reduce((acc, current) => {
        let tokens = current.split('<->').map(x => x.trim());
        let town = tokens[0];
        let population = tokens[1];

        if (!acc.hasOwnProperty(town)) { 
            acc[town] = 0;
        }

        acc[town] += +population;

        return acc;
    }, {});

    for (const key in res) {
        console.log(`${key} : ${res[key]}`);
    }
}