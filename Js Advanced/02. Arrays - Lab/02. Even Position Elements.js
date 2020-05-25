function evenPositionElement(arr) {
    return arr
        .filter((el, index) => {
            return index % 2 === 0;
        })
        .join(' ');
}