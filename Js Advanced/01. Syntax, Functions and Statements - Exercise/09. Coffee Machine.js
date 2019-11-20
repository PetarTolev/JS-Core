function solve(input) {
    let income = 0;

    for (let i = 0; i < input.length; i++) {
        function addMilk(index) {
            if (order[index] == "milk") {
                price += Number((price * 0.1).toFixed(1));
            }
        }
        let order = input[i].split(", ");

        let insertedCoins = order[0];
        let price = 0;

        if (order[1] == "coffee") {
            if (order[2] == "caffeine") {
                price = 0.80;
            } else if (order[2] == "decaf") {
                price = 0.90;
            }

            addMilk(3);
        } else if (order[1] == "tea") {
            price = 0.80;

            addMilk(2);
        }

        if (order[order.length - 1] > 0) {
            price += 0.1;
        }

        if (insertedCoins >= price) {
            console.log(`You ordered ${order[1]}. Price: $${price.toFixed(2)} Change: $${(insertedCoins - price).toFixed(2)}`);
            income += price;
        } else {
            console.log(`Not enough money for ${order[1]}. Need $${(price - insertedCoins).toFixed(2)} more.`)
        }
    }

    console.log(`Income Report: $${income.toFixed(2)}`);
}