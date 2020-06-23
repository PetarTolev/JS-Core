function solve() {
    return {
        elements: [],
        add: function(element) {
            this.elements.push(element);
            this._sort();
            this.size++;
        },
        remove: function(index) {
            this._validation(index);
            this.elements.splice(index, 1);
            this.size--;
        },
        get: function(index) {
            this._validation(index);
            return this.elements[index];
        },
        size: 0,
        _sort: function() {
            this.elements.sort((a, b) => a - b);
        },
        _validation: function(index) {
            if (index > this.elements.length || index < 0 || this.elements.length === 0) {
                throw new Error();
            }
        }
    }
}