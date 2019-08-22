function solve(input) {
    let totalIncome = 0;

    for (const order of input) {
        let totalPrice = 0.00;
        const splittedOrder = order.split(', ');
        const coinsInserted = splittedOrder[0];
        const drink = splittedOrder[1];

        if (drink === 'coffee') {
            const typeOfCoffee = splittedOrder[2];

            if (typeOfCoffee === 'caffeine') {
                totalPrice += 0.80;
            }
            else if (typeOfCoffee === 'decaf') {
                totalPrice += 0.90;
            }
        }
        else if (drink === 'tea') {
            totalPrice += 0.80;
        }

        if (splittedOrder[splittedOrder.length - 2] === 'milk') {
            totalPrice += Number((totalPrice * 0.10).toFixed(1));
        }

        const quantityOfSugar = Number(splittedOrder[splittedOrder.length - 1]);

        if (quantityOfSugar > 0) {
            totalPrice += 0.10;
        }

        let change = Math.abs(coinsInserted - totalPrice);

        if (totalPrice <= coinsInserted) {
            console.log(`You ordered ${drink}. Price: ${totalPrice.toFixed(2)}$ Change: ${change.toFixed(2)}$`);

            totalIncome += totalPrice;
        }
        else {
            console.log(`Not enough money for ${drink}. Need ${change.toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}