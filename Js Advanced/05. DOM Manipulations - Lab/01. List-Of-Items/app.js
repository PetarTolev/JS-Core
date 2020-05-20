function addItem() {
    let inputContent = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    if (inputContent === null || list === null) {
        throw new Error('missing dom elements');
    }

    addElement(list, createElement('li', inputContent));
}

function createElement(type, content) {
    let element = document.createElement(type);
    element.innerHTML = content
    return element;
}

function addElement(list,  element) {
    if (element.innerHTML === "") {
        throw new Error('cannot add empty elements')
    }
    list.appendChild(element)
}
