function solve(fruit, weight, pricePerKilogram){
    weight = weight / 1000;
    let totalPrice = weight * pricePerKilogram;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);

}

solve('orange', 2500, 1.80);