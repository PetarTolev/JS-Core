function solve(input){
    let juices = {};
    let bottles = {};

    for (const line of input) {
        let [name, quantity] = line.split(' => ');

        if (!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }

        juices[name] += Number(quantity);
        let currentQuantity = juices[name];

        if (currentQuantity >= 1000) {
            bottles[name] = Math.trunc(currentQuantity / 1000);
        }
    }

    let keys = Object.keys(bottles);
    for (const name of keys) {
        let quantity = bottles[name];

        console.log(`${name} => ${quantity}`);
    }
}