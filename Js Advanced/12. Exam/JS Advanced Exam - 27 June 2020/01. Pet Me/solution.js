function solve() {
    function createElement(tag, content) {
        let element = document.createElement(tag);

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }

            element.appendChild(node);
        }

        if (Array.isArray(content)) {
            content.forEach(append)
        } else {
            append(content);
        }

        return element;
    }

    function clearFields(...fields) {
        fields.forEach(f => f.value = '');
    }

    const adoption = document.querySelector('#adoption > ul');
    const [name, age, kind, currentOwner] = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('button');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (name.value === '' || isNaN(age.value) || kind.value === '' || currentOwner.value === '') {
            return;
        }

        let contactBtn = createElement('button', 'Contact with owner');

        let li = createElement(
            'li', [
                createElement(
                    'p', [
                        createElement('strong', name.value),
                        document.createTextNode(' is a '),
                        createElement('strong', age.value),
                        document.createTextNode(' year old '),
                        createElement('strong', kind.value)
                    ]
                ),
                createElement('span', `Owner: ${currentOwner.value}`),
                contactBtn
            ]
        );

        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactBtn.remove();
            const input = document.createElement('input');
            input.setAttribute('placeholder', 'Enter your names');
            const takeBtn = createElement('button', 'Yes! I take it!');
            const div = createElement(
                'div', [
                    input,
                    takeBtn
                ]);

            li.appendChild(div);

            takeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const newOwner = input.value;
                if (newOwner === '') {
                    return;
                }
                const adopted = document.querySelector('#adopted > ul');
                li.remove();
                li.querySelector('span').innerText = `New Owner: ${newOwner}`;
                div.remove();
                takeBtn.innerText = 'Checked';
                li.appendChild(takeBtn);
                adopted.appendChild(li);
            });
        });

        adoption.appendChild(li);
        clearFields(name, age, kind, currentOwner);
    });
}