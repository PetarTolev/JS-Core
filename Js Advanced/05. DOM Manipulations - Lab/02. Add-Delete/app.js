function addItem() {
    let inputContent = document.getElementById('newText').value;
    let list = document.getElementById('items');

    if (inputContent === null || list === null) {
        throw new Error('missing dom elements');
    }

    addElement(list, createElement('li', inputContent));
}

function addDeleteButton(element) {
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.
    a.appendChild(document.createTextNode('[Delete]'));
    element.appendChild(a);    

    return element;
}

function createElement(type, content) {
    let element = document.createElement(type);
    element.innerHTML = content;
    addDeleteButton(element);

    return element;
}

function addElement(list,  element) {
    if (element.innerHTML === "") {
        throw new Error('cannot add empty elements')
    }
    list.appendChild(element)
}
