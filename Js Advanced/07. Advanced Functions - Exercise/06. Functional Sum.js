function add(n) {
    function sum(n1) {
        n += n1;
        return sum;
    }

    sum.toString = () => n;
    return sum;
}