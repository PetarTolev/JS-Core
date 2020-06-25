function addItem() {
    let input = document.querySelector('#newItemText');
    let items = document.querySelector('#items');

    if (input.value === '') {
        return;
    }

    items.appendChild(createElement('li', input.value));

    input.value = '';

    function createElement(tag, content) {
        let element = document.createElement(tag);
        element.innerHTML = content;
        return element;
    }
}