function solve(input) {
    let res = input.reduce((a, c) => {
        let [brand, model, quantity] = c.split(' | ');
        quantity = Number(quantity);

        if (!a.hasOwnProperty(brand)) {
            a[brand] = {};
        }

        if (!a[brand].hasOwnProperty(model)) {
            a[brand][model] = 0;
        };

        a[brand][model] += quantity;

        return a;
    }, {});

    function print(brands) {
        for (const brand in brands) {
            console.log(brand);
            let models = brands[brand];

            for (const model in models) {
                console.log(`###${model} -> ${models[model]}`);
            }
        }
    }

    print(res);
}