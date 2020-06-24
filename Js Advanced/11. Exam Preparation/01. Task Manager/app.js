function solve() {
    function appendChildren(element, ...children) {
        for (const child of children) {
            element.appendChild(child);
        }

        return element;
    }

    function createElement(tag, content = null, ...classes) {
        let element = document.createElement(tag);
        element.innerHTML = content;

        for (const c of classes) {
            element.classList.add(c);
        }

        return element;
    }

    function deleteTask() {
        this.parentNode.parentNode.remove();
    }

    function moveToProgress() {
        let article = this.parentNode.parentNode;
        let div = article.parentNode;

        div.removeChild(article);
        article.querySelector('.green').remove();

        const orange = createElement('button', 'Finish', 'orange');

        appendChildren(article.querySelector('.flex'), orange);

        orange.addEventListener('click', moveToFinish);

        inProgressDiv.appendChild(article);
    }

    function moveToFinish() {
        let article = this.parentNode.parentNode;
        let div = article.parentNode;

        div.removeChild(article);
        article.querySelector('.flex').remove();

        completeDiv.appendChild(article);
    }

    function clearFields(...fields) {
        for (const field of fields) {
            field.value = '';
        }
    }

    function validateFields(...fields) {
        for (const field of fields) {
            if (field.value === '') {
                throw new Error();
            }
        }
    }

    const [addDiv, openDiv, inProgressDiv, completeDiv] = document.querySelectorAll('section div:nth-child(2)');

    const task = addDiv.querySelector('#task');
    const description = addDiv.querySelector('#description');
    const date = addDiv.querySelector('#date');

    document.getElementById('add').addEventListener('click', function(e) {
        e.preventDefault();

        validateFields(task, description, date);

        const green = createElement('button', 'Start', 'green');
        const red = createElement('button', 'Delete', 'red');

        let taskArticle = appendChildren(
            createElement('article'),
            createElement('h3', task.value),
            createElement('p', `Description: ${description.value}`),
            createElement('p', `Due Date: ${date.value}`),
            appendChildren(
                createElement('div', '', 'flex'),
                green,
                red
            )
        );

        green.addEventListener('click', moveToProgress);
        red.addEventListener('click', deleteTask);

        appendChildren(openDiv, taskArticle)

        clearFields(task, description, date);
    });
}