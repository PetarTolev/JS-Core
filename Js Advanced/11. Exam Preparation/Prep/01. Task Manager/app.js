function solve() {
    function createElement(tag, content, classes) {
        let element = document.createElement(tag);

        if (Array.isArray(classes)) {
            classes.forEach(c => c.classList.add(c));
        } else {
            element.classList.add(classes)
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
        fields.forEach(f => {
            f.value = '';
        })
    }

    const [_, openDiv, inProgressDiv, completeDiv] = document.querySelectorAll('section div:nth-child(2)');

    const task = document.querySelector('#task');
    const description = document.querySelector('#description');
    const date = document.querySelector('#date');

    document.querySelector('#add')
        .addEventListener('click', (e) => {
            e.preventDefault();

            if (task.value === '' || description.value === '' || date.value === '') {
                return;
            }

            const startBtn = createElement('button', 'Start', 'green');
            const deleteBtn = createElement('button', 'Delete', 'red');

            let article = createElement(
                'article', [
                    createElement('h3', task.value),
                    createElement('p', 'Description: ' + description.value),
                    createElement('p', 'Due Date: ' + date.value),
                    createElement('div', [startBtn, deleteBtn], 'flex'),
                ]
            );

            startBtn.addEventListener('click', () => {
                article.remove();
                startBtn.remove();

                const finishBtn = createElement('button', 'Finish', 'orange');

                let flexDiv = article.querySelector('.flex');
                flexDiv.appendChild(finishBtn);
                finishBtn.addEventListener('click', () => {
                    article.remove();
                    flexDiv.remove();
                    completeDiv.appendChild(article);
                });

                inProgressDiv.appendChild(article);
            });

            deleteBtn.addEventListener('click', () => {
                article.remove();
            });

            openDiv.appendChild(article);
            clearFields(task, description, date);

        });

}