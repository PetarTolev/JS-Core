(function() {
    String.prototype.ensureStart = function(str) {
        return this.startsWith(str) ? this.toString() : str + this;
    }

    String.prototype.ensureEnd = function(str) {
        return this.endsWith(str) ? this.toString() : this + str;
    }

    String.prototype.isEmpty = function() {
        return this.toString() === '' ? true : false;
    }

    String.prototype.truncate = function(n) {
        let str = this.toString();
        if (n < 4) {
            return new Array(n + 1).join('.');
        } else if (n > str.length - 1) {
            return str;
        } else if (str.split(' ').length === 1) {
            return str.substr(0, n - 3) + '...';
        } else {
            let splited = str.split(' ');
            while (splited.join(' ').length + 3 > n) {
                splited.pop();
            }
            return splited.join(' ') + '...';
        }
    }

    String.format = function(str, ...params) {
        return str.match(/\{\d\}/g).reduce((acc, curr, index) => {
            return acc.replace(curr, params[index] ? params[index] : curr);
        }, str);
    }
})();