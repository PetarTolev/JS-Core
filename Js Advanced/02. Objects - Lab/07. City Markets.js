function solve(input) {
    let towns = {};

    for (const line of input) {
        let splittedLine = line.split(' -> ');
        let townName = splittedLine[0];
        let productName = splittedLine[1];
        let prices = splittedLine[2].split(' : ')
        let amountOfSales = prices[0];
        let priceForOneUnit = prices[1];
        let totalPrice = amountOfSales * priceForOneUnit;

        if (!towns[townName]) {
            towns[townName] = [];
        }

        towns[townName].push(`$$$${productName} : ${totalPrice}`)
    }

    let townNames = Object.keys(towns);

    for (const townName of townNames) {
        console.log(`Town - ${townName}`);

        let products = towns[townName];
        for (const product of products) {
            console.log(product);
        }
    }
}