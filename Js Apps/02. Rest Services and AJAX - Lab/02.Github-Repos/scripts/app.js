function loadRepos() {
    const username = document.querySelector('#username').value;
    const repos = document.querySelector('#repos');
    repos.textContent = '';

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(getNameAndUrl)
        .then(createListItems)
        .then(items => appendItems(repos, items))
        .catch()
}

function getNameAndUrl(items) {
    return items.reduce((acc, curr) => {
        acc.push({ name: curr.full_name, url: curr.html_url });
        return acc;
    }, []);
}

function createListItems(items) {
    return items.reduce((acc, curr) => {
        const listEl = document.createElement('li');
        const anchorEl = document.createElement('a');
        anchorEl.href = curr.url;
        anchorEl.textContent = curr.name;
        listEl.appendChild(anchorEl);
        acc.push(listEl);
        return acc;
    }, []);
}

function appendItems(parent, items) {
    items.forEach(item => {
        parent.appendChild(item);
    });
}