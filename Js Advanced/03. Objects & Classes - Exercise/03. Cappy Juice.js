function calcBottles(input) {
    let res = {};

    input.reduce((a, c) => {
        let [fruit, quantity] = c.split(' => ');
        quantity = Number(quantity);

        if (!a.hasOwnProperty(fruit)) {
            a[fruit] = 0;
        }
        a[fruit] += quantity;

        if (a[fruit] / 1000 >= 1) {
            res[fruit] = parseInt(a[fruit] / 1000);
        }

        return a;
    }, {});

    function print(bottles) {
        for (const bottle in bottles) {
            console.log(`${bottle} => ${bottles[bottle]}`);
        }
    }

    print(res);
}