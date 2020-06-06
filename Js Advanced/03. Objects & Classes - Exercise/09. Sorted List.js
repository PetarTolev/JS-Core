class List {
    constructor() {
        this._elements = [];
        this.size = 0;
    }

    add(element) {
        this._elements.push(element);
        this._elements.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        this._validate(index);

        this._elements.splice(index, 1);
        this.size--;
    }

    get(index) {
        this._validate(index);

        return this._elements[index];
    }

    _validate(index) {
        if (index > this.size - 1 || index < 0) {
            throw new Error('Index is out of bounds');
        }
    }
}