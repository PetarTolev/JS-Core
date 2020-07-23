window.addEventListener('load', async() => {
    const ul = document.querySelector('#root ul');
    const inputField = document.getElementById('towns');

    const template = await fetch('./town.hbs')
        .then(r => r.text())
        .then(t => Handlebars.compile(t));

    document
        .getElementById('btnLoadTowns')
        .addEventListener('click', (e) => {
            e.preventDefault();

            const towns = inputField.value.split(', ');

            ul.innerHTML = template({ towns });
        });

})