function solve(arrays) {
    function area() {
        return this.width * this.height;
    }

    function compareTo(other) {
        const currentRecArea = area.call(this);
        const otherRecArea = area.call(other);
        return otherRecArea - currentRecArea || other.width - this.width;
    }

    return arrays.reduce((acc, [width, height]) =>
            acc.concat({ width, height, area: area, compareTo: compareTo }), [])
        .sort((a, b) => a.compareTo(b));
}