module.exports.sum = function(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}