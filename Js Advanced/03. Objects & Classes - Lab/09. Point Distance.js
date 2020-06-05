class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    static distance(a, b) {
        return Math.sqrt((b._x - a._x) ** 2 + (b._y - a._y) ** 2);
    }
}