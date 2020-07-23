window.addEventListener('load', () => {
    const monkeysDiv = document.getElementsByClassName('monkeys')[0];

    Promise.all([
        fetch('./monkey-card.hbs')
        .then(r => r.text()),
        fetch('./monkeys.hbs')
        .then(r => r.text()),
    ]).then(([monkeyCardTemplate, monkeysTemplate]) => {
        Handlebars.registerPartial('monkey', monkeyCardTemplate);

        const template = Handlebars.compile(monkeysTemplate);
        const generatedHTML = template({ monkeys: monkeys });

        monkeysDiv.innerHTML = generatedHTML;
        monkeysDiv.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') { return; }

            const p = e.target.parentElement.querySelector('p');
            if (p.style.display === 'none') {
                p.style.display = 'block';
            } else {
                p.style.display = 'none';
            }
        })
    });
})