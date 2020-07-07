function attachEvents() {
    const html = {
        loadBtn() { return document.getElementById('btnLoad') },
        phonebook() { return document.getElementById('phonebook') },
        createBtn() { return document.getElementById('btnCreate') },
        phone() { return document.getElementById('phone') },
        person() { return document.getElementById('person') }
    }

    const baseUrl = 'http://localhost:8000/phonebook.json';

    html.loadBtn().addEventListener('click', async() => {
        let data = await fetch(baseUrl)
            .then(x => x.json())
            .catch(console.error);

        let fragment = document.createDocumentFragment();
        for (const d of Object.entries(data)) {
            let li = document.createElement('li');
            li.innerHTML = `${d[1].person}: ${d[1].phone}`;
            let deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = 'Delete';
            li.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', function() {
                fetch(`${baseUrl}/${d[0]}`, { method: 'DELETE' });
                li.remove();
            });

            fragment.appendChild(li);
        }
        html.phonebook().innerHTML = '';
        html.phonebook().appendChild(fragment);
    });

    html.createBtn().addEventListener('click', (e) => {
        const { value: person } = html.person();
        const { value: phone } = html.phone();

        fetch(`${baseUrl}`, {
                method: 'POST',
                body: JSON.stringify({ person, phone })
            })
            .catch(console.error);

        html.person().value = '';
        html.phone().value = '';
    });
}

attachEvents();