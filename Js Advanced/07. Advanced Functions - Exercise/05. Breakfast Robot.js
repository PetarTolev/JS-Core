function solution() {
    const operations = {
        restock,
        prepare,
        report
    };

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    function restock(microelement, quantity) {
        if (!ingredients.hasOwnProperty(microelement) || quantity < 1) { return; }

        ingredients[microelement] += quantity;
        return "Success";
    }

    function prepare(recipe, quantity) {
        if (!recipes.hasOwnProperty(recipe) || quantity < 1) { return; }

        let ings = Object.entries(recipes[recipe]);

        for (let i = 0; i < ings.length; i++) {
            let name = ings[i][0];
            let value = ings[i][1];
            if (ingredients[name] * quantity < value * quantity) {
                return `Error: not enough ${name} in stock`;
            }

            ingredients[name] -= value * quantity;
        }

        return "Success";
    }

    function report() {
        return Object.entries(ingredients)
            .reduce((acc, c) => {
                return acc += `${c[0]}=${c[1]} `;
            }, '')
            .trim();
    }

    return function(input) {
        let tokens = input.split(' ');
        return operations[tokens[0]](tokens[1], Number(tokens[2]));
    }
}