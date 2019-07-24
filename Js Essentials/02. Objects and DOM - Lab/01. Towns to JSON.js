function solve(input) {

    let splitPatern = /\s*\|\s*/;

    let towns = [];

    for (let i = 1; i < input.length; i++) {
        let currentRow = input[i].split(splitPatern).filter(x => x.length > 0);   

        let town = {};

        town["Town"] = currentRow[0];
        town["Latitude"] = Number(currentRow[1]);
        town["Longitude"] = Number(currentRow[2]);

        towns.push(town);
    }

    console.log(JSON.stringify(towns));
}