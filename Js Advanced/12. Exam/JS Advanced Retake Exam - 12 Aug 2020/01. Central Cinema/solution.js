function solve() {
    function createElement(tag, content) {
        const element = document.createElement(tag);

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

    function isFilled(...fields) {
        for (const f of fields) {
            if (f.value === "") {
                return false;
            }
        }

        return true;
    }

    const fields = document.querySelectorAll('#container *');
    const [name, hall, ticketPrice, button] = fields;
    const movies = document.querySelector('#movies ul');
    const archives = document.querySelector('#archive ul');
    const clearBtn = document.querySelector('#archive button');

    clearBtn.addEventListener('click', () => {
        Array.from(archives.querySelectorAll('ul li')).forEach(f => f.remove());
    });

    button.addEventListener('click', (e) => {
        e.preventDefault();

        if (!isFilled(name, hall, ticketPrice)) { return; }
        if (isNaN(+ticketPrice.value)) { return; }

        const archiveBtn = createElement('button', 'Archive');
        const ticketsSoldInput = createElement('input', '');
        ticketsSoldInput.placeholder = 'Tickets Sold';

        const movie = createElement(
            'li', [
                createElement('span', name.value),
                createElement('strong', `Hall: ${hall.value}`),
                createElement('div', [
                    createElement('strong', ticketPrice.value),
                    ticketsSoldInput,
                    archiveBtn
                ])
            ]
        );

        movies.appendChild(movie);

        const nameValue = name.value;
        const ticketPriceValue = +ticketPrice.value;

        archiveBtn.addEventListener('click', () => {
            if (ticketsSoldInput.value === "" || isNaN(+ticketsSoldInput.value)) { return; }

            const profit = +ticketsSoldInput.value * ticketPriceValue;

            const deleteBtn = createElement('button', 'Delete');

            const deleted = createElement('li', [
                createElement('span', nameValue),
                createElement('strong', `Total amount: ${profit.toFixed(2)}`),
                deleteBtn,
            ]);

            deleteBtn.addEventListener('click', () => {
                deleted.remove();
            });

            movie.remove();

            archives.appendChild(deleted);
        });

        clearFields(name, hall, ticketPrice);
    });
}