function solve(elements) {
    let object = {};

    for (let i = 0; i < elements.length; i += 2) {
        let property = elements[i];
        let value = Number(elements[i + 1]);

        object[property] = value;
    }

    console.log(object)
}