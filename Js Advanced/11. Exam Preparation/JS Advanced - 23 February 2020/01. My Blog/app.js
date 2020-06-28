function solve() {
    function createElement(tag, content, classes) {
        let element = document.createElement(tag);
        if (classes !== undefined) {
            if (Array.isArray(classes)) {
                classes.forEach(c => element.classList.add(c));
            } else {
                element.classList.add(classes)
            }
        }

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

    document.querySelector('.create')
        .addEventListener('click', (e) => {
            e.preventDefault();
            const articles = document.querySelector('.site-content section');
            const creator = document.querySelector('#creator');
            const title = document.querySelector('#title');
            const titleValue = title.value;
            const category = document.querySelector('#category');
            const content = document.querySelector('#content');

            const deleteBtn = createElement('button', 'Delete', ['btn', 'delete']);
            const archiveBtn = createElement('button', 'Archive', ['btn', 'archive']);

            let article = createElement('article', [
                createElement('h1', title.value),
                createElement('p', [
                    document.createTextNode('Category:'),
                    createElement('strong', category.value)
                ]),
                createElement('p', [
                    document.createTextNode('Creator:'),
                    createElement('strong', creator.value)
                ]),
                createElement('p', content.value),
                createElement('div', [deleteBtn, archiveBtn], 'buttons'),
            ]);

            deleteBtn.addEventListener('click', () => {
                article.remove();
            });
            archiveBtn.addEventListener('click', () => {
                article.remove();

                const archive = document.querySelector('.archive-section ul');
                archive.appendChild(createElement('li', titleValue));

                let sorted = [...archive.querySelectorAll('li')]
                    .sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));

                archive.textContent = '';
                sorted.forEach(s => archive.appendChild(s));
            });

            articles.appendChild(article);
            clearFields(creator, title, category, content);
        });
}