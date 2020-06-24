function solve() {
    const unitsMap = {
        cm: 1,
        mm: 10,
        m: 0.01
    }

    class Figure {
        constructor(unit = 'cm') {
            this.unit = unit;
            this.unitValue = unitsMap[unit];
        }

        changeUnits(unit) {
            this.unit = unit;
            this.unitValue = unitsMap[unit];
        }
    };

    class Circle extends Figure {
        constructor(radius, unit) {
            super(unit);
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.unitValue * this.radius * this.unitValue;
        }

        toString() {
            return `Figures units: ${this.unit} Area: ${this.area} - radius: ${this.radius* this.unitValue}`;
        }
    };

    class Rectangle extends Figure {
        constructor(width, height, unit) {
            super(unit);
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.unitValue * this.height * this.unitValue;
        }

        toString() {
            return `Figures units: ${this.unit} Area: ${this.area} - width: ${this.width * this.unitValue}, height: ${this.height * this.unitValue}`;
        }
    };

    return {
        Figure,
        Circle,
        Rectangle
    }
}