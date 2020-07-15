function attachEvents() {
    const html = {
        loadPostsBtn() { return document.getElementById('btnLoadPosts'); },
        viewPostBtn() { return document.getElementById('btnViewPost') },
        posts() { return document.getElementById('posts') },
        postTitle() { return document.getElementById('post-title') },
        postBody() { return document.getElementById('post-body') },
        comments() { return document.getElementById('post-comments') }
    };

    html.loadPostsBtn().addEventListener('click', () => makeFetch('posts.json', (data) => {
        const fragment = document.createDocumentFragment();

        for (const [id, { title }] of Object.entries(data)) {
            let option = document.createElement('option');
            option.value = id;
            option.textContent = title;

            fragment.appendChild(option);
        }

        html.posts().appendChild(fragment);
    }));

    html.viewPostBtn().addEventListener('click', () => {
        makeFetch(`posts/${html.posts().value}.json`, (data) => {
            html.postTitle().textContent = data.title;
            html.postBody().textContent = data.body;
            html.comments().innerHTML = '';

            if (data.comments === undefined) { return; }

            data.comments.forEach(e => {
                let li = document.createElement('li');
                li.textContent = e.comment;

                html.comments().appendChild(li);
            });
        })
    });
}

async function makeFetch(url, fn) {
    const mainUrl = 'https://blog-apps-c12bf.firebaseio.com';

    return fetch(`${mainUrl}/${url}`)
        .then(r => r.json())
        .then(d => fn(d));
}

attachEvents();