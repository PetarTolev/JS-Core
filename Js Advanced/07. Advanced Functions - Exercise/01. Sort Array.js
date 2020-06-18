function sort(data, order) {
    let orderFuncs = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }

    return data.sort(orderFuncs[order]);
}