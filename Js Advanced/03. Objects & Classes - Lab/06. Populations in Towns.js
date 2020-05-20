function solve(input) {
    let towns = {};

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(" <-> ")

        if (!towns[currentRow[0]]) {
            towns[currentRow[0]] = 0;
        }

        towns[currentRow[0]] += Number(currentRow[1]);
    }
    
    for (const town of Object.entries(towns)) {
        console.log(`${town[0]} : ${town[1]}`);
    }
}