function evenPositionElement(arr) {
    return arr
        .filter((_, index) => {
            return index % 2 === 0;
        })
        .join(' ');
}