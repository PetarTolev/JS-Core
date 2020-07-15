async function loadCommits() {
    const html = {
        username() { return document.getElementById('username') },
        repo() { return document.getElementById('repo') },
        commits() { return document.getElementById('commits') }
    };

    if (html.username().value === '' || html.repo().value === '') {
        return;
    }

    const mainUrl = 'https://api.github.com/repos';

    html.commits().textContent = '';

    fetch(`${mainUrl}/${html.username().value}/${html.repo().value}/commits`)
        .then(e => {
            if (!e.ok) {
                let li = document.createElement('li');
                li.textContent = `Error: ${e.status} (${e.statusText})`;
                html.commits().appendChild(li);
            }
            return e;
        })
        .then(r => r.json())
        .then(data => {
            let fragment = document.createDocumentFragment();
            for (const d of data) {
                let li = document.createElement('li');
                li.textContent = `${d.commit.author.name}: ${d.commit.message}`;
                fragment.appendChild(li);
            }
            html.commits().appendChild(fragment);
        });
}