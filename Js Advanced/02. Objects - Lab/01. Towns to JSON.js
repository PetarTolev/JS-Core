function solve(input) {

    let splitPatern = /\s*\|\s*/;

    let towns = [];

    for (let i = 1; i < input.length; i++) {
        let currentRow = input[i].split(splitPatern).filter(x => x.length > 0);

        let town = {};

        town["Town"] = currentRow[0];
        town["Latitude"] = Math.floor(+currentRow[1] * 100) / 100;
        town["Longitude"] = Math.floor(+currentRow[2] * 100) / 100;


        towns.push(town);
    }

    console.log(JSON.stringify(towns));
}