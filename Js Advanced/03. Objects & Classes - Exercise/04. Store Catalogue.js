function solve(input){
    let products = {};

    for (const line of input) {
        let [name, price] = line.split(' : ');

        let productFirstLetter = name[0];
        if (!products.hasOwnProperty(productFirstLetter)) {
            products[productFirstLetter] = [];
        }

        let product = {
            name: name,
            price: price
        }

        products[productFirstLetter].push(product);
    }
   
    let keys = Object.keys(products).sort();

    for (const letter of keys) {
        console.log(letter);

        let sortedProducts = products[letter].sort(function(a, b) {return a.name.localeCompare(b.name)})
        for (const product of sortedProducts) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}