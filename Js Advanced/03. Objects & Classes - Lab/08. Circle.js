class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    
    get diameter() {
        return this._radius * 2;
    }

    set diameter(d) {
        this._radius = d / 2;
    }
    
    get radius() {
        return this._radius;
    }

    get area() {
        return Math.PI * (this._radius ** 2);
    }
}