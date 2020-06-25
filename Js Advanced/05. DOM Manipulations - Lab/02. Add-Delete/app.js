function addItem() {
    let input = document.querySelector('#newText');
    let items = document.querySelector('#items');

    if (input.value === '') {
        return;
    }

    let li = createElement('li', input.value)
    let a = createElement('a', '[Delete]', { href: '#' });
    a.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    });

    li.appendChild(a);
    items.appendChild(li);

    input.value = '';

    function createElement(tag, content, attributes) {
        let element = document.createElement(tag);
        element.innerHTML = content;

        if (attributes) {
            for (const [name, value] of Object.entries(attributes)) {
                element.setAttribute(name, value);
            }
        }

        return element;
    }
}