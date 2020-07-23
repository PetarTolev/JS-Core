(() => {
    const catsElement = document.querySelector('#allCats ul');

    function renderCatTemplate() {
        Promise.all([
            fetch('./cat-card.hbs')
            .then(r => r.text()),
            fetch('./cats.hbs')
            .then(r => r.text()),
        ]).then(([catCardTemplate, catsTemplate]) => {
            Handlebars.registerPartial("cat", catCardTemplate)
            const template = Handlebars.compile(catsTemplate);
            const generatedHTML = template({ cats: window.cats });

            catsElement.innerHTML = generatedHTML;
            catsElement.addEventListener('click', (e) => {
                if (!e.target.classList.contains('showBtn')) { return; }

                const statusDiv = e.target.parentElement.querySelector('div.status');
                if (statusDiv.style.display === 'none') {
                    statusDiv.style.display = 'block';
                } else {
                    statusDiv.style.display = 'none';
                }
            });
        });
    }

    renderCatTemplate();
})();