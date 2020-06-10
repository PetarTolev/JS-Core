function createArticle() {
    function clearFields(...fields) {
        fields.forEach(f => f.value = '');
    }

    function createElementWithContent(element, content) {
        let e = document.createElement(element);
        e.textContent = content;
        return e;
    }

    let title = document.querySelector('#createTitle');
    let content = document.querySelector('#createContent');

    if (title.value === '' || content.value === '') {
        return;
    }

    let articleEl = document.createElement('article');

    let h3El = createElementWithContent('h3', title.value);
    articleEl.appendChild(h3El);

    let pEl = createElementWithContent('p', content.value);
    articleEl.appendChild(pEl);

    let articlesEl = document.querySelector('#articles');

    articlesEl.appendChild(articleEl);

    clearFields(title, content);
}