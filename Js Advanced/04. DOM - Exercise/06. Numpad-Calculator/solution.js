function solve() {
    let buttons = [...document.querySelectorAll('button')];
    let expressionField = document.querySelector('#expressionOutput');
    let resultField = document.querySelector('#resultOutput');

    buttons.forEach(b => {
        b.addEventListener('click', function() {
            let n = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
            let o = ['-', '+', '*', '/'];

            if (n.includes(b.value)) {
                btnActions['number'](b.value);
            } else if (o.includes(b.value)) {
                btnActions['operator'](b.value);
            } else if (b.value === '=') {
                btnActions['=']();
            } else {
                btnActions['Clear']();
            }
        });
    });

    function addTextToExpressionField(el) {
        let t = document.createTextNode(el);
        expressionField.appendChild(t);
    };

    let btnActions = {
        _num1: '',
        _num2: '',
        _operator: null,

        'operator': function(op) {
            addTextToExpressionField(' ' + op + ' ');
            this._operator = op;
        },
        'Clear': function() {
            expressionField.textContent = '';
            resultField.textContent = '';
            this._num1 = '';
            this._num2 = ''
            this._operator = null;
        },
        'number': function(num) {
            if (this._operator === null) {
                this._num1 += num;
            } else {
                this._num2 += num;
            }

            addTextToExpressionField(num);
        },
        '=': function() {
            if (this._operator === '+') {
                resultField.textContent = Number(this._num1) + Number(this._num2);
            } else if (this._operator === '-') {
                resultField.textContent = Number(this._num1) - Number(this._num2);
            } else if (this._operator === '*') {
                resultField.textContent = Number(this._num1) * Number(this._num2);
            } else if (this._operator === '/') {
                resultField.textContent = Number(this._num1) / Number(this._num2);
            }
        }
    };
}