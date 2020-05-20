function solve(input) {
    let cars = {};

    for (const line of input) {
        let [brand, model, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = {};
        }

        if (!cars[brand].hasOwnProperty(model)) {
            cars[brand][model] = 0;
        }

        cars[brand][model] += producedCars;
    }

    let keys = Object.keys(cars);
    
    for (const brand of keys) {
        console.log(brand);

        for (const model in cars[brand]) {
            console.log(`###${model} -> ${cars[brand][model]}`);
        }
    }
}