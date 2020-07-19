function attachEvents() {
    const html = {
        add: document.querySelector('.add'),
        load: document.querySelector('.load'),
        addForm: document.getElementById('addForm'),
        main: document.getElementById('main'),
        catches: document.getElementById('catches'),
    };

    html.load.addEventListener('click', async() => {
        await makeFetch('');
    });

    html.add.addEventListener('click', async() => {
        const data = getFieldsValues(html.addForm);
        const { name } = await makeFetch('', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        console.log(name, data);

        html.catches
            .appendChild();
    });
}

function createElement(tag, c, ...content) {
    const el = document.createElement(tag);

    function append(node) {
        if (typeof node === 'string') {
            node = document.createTextNode(node);
        }

        el.appendChild(node);
    }

    content.forEach(e => {
        append(e);
    });

    if (c !== undefined) {
        el.classList.add(c);
    }

    return el;
}

function getFieldsValues(parent) {
    return {
        angler: parent.querySelector('.angler').value,
        weight: parent.querySelector('.weight').value,
        species: parent.querySelector('.species').value,
        location: parent.querySelector('.location').value,
        bait: parent.querySelector('.bait').value,
        captureTime: parent.querySelector('.captureTime').value,
    };
}

function makeFetch(url, o) {
    return fetch(`https://fisher-game.firebaseio.com/catches${url}.json`, o)
        .then(r => r.json());
}

attachEvents();