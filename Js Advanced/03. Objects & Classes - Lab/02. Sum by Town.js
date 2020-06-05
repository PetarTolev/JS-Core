function sumByTown(arr) {
    let res = {};

    for (let i = 0; i < arr.length; i += 2) {
        let prop = arr[i];
        let val = arr[i + 1];

        if (!res.hasOwnProperty(prop)) {
            res[prop] = 0;   
        }

        res[prop] += +val;
    }

    return JSON.stringify(res);
}