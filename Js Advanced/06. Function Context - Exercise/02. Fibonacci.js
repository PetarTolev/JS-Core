function getFibonator() {
    let current = 0;
    let next = 1;

    function fibonator() {
        let newNum = current + next;
        current = next;
        next = newNum;

        return current;
    }

    return fibonator;
}