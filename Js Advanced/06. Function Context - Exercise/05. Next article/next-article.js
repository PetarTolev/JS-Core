function getArticleGenerator(articles) {
    let index = 0;

    return function() {
        if (index > articles.length - 1) {
            return;
        }

        let div = document.querySelector('#content');
        let article = document.createElement('article');
        article.innerText = articles[index];

        div.appendChild(article);

        index++;
    }
}