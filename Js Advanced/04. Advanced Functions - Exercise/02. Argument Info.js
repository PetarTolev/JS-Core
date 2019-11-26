function result(...params) {
    let result = {};

    for (const param of params) {
        let typeOfParam = typeof param;

        if (!result.hasOwnProperty(typeOfParam)) {
            result[typeOfParam] = 0; 
        }

        result[typeOfParam]++;

        console.log(`${typeof(param)}: ${param}`);
    }

    Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .map(([type, count]) => `${type} = ${count}`)
    .forEach(element => {
        console.log(element);
    });
}