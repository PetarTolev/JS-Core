function solve() {
    function addOptionsToSelect() {
        let toMenuEl = document.querySelector('#selectMenuTo');
        let binaryOptEl = createOptionEl('binary', 'Binary')
        let hexadecimalOptEl = createOptionEl('hexadecimal', 'Hexadecimal');

        addChilds(toMenuEl, [binaryOptEl, hexadecimalOptEl]);
    }

    function createOptionEl(value, textContent) {
        let el = document.createElement('option');
        el.value = value;
        el.textContent = textContent;
        return el;
    }

    function addChilds(parent, childs) {
        childs.forEach(c => parent.appendChild(c));
    }

    addOptionsToSelect();

    let btn = document.querySelector('button');

    btn.addEventListener('click', () => {
        let options = document.querySelector('#selectMenuTo');
        let selectedOptionValue = options.options[options.selectedIndex].value;
        let numToConvertValue = document.querySelector('#input').value;
        let result = document.querySelector('#result');

        let bases = {
            hexadecimal: 16,
            binary: 2,
        }

        result.value = Number(numToConvertValue)
            .toString(bases[selectedOptionValue])
            .toUpperCase();
    })
}