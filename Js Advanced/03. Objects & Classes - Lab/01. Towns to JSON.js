function toJSON(arr) {
    const converNum = (x) => {
        let num = +x;

        if (!isNaN(num)) {
            return +num.toFixed(2);
        }

        return x;
    }

    function deserialize(str) {
        return str
            .split(/\s?\|\s?/)
            .filter(x => x.length > 0)
            .map(converNum);
    }

    function toObj(props, values) {
        return props.reduce((acc, current, index) => {
            acc[current] = values[index];
            return acc;
        }, {})
    }

    let props = deserialize(arr[0]);
    let res = [];

    for (let i = 1; i < arr.length; i++) {
        let values = deserialize(arr[i]);

        res.push(toObj(props, values));
    }

    return JSON.stringify(res)
}