function attachEvents() {
    const html = {
        sendBtn() { return document.getElementById('submit') },
        refreshBtn() { return document.getElementById('refresh') },
        messages() { return document.getElementById('messages') },
        author() { return document.getElementById('author') },
        content() { return document.getElementById('content') }
    };

    const baseUrl = 'http://localhost:8000/messenger.json';

    html.refreshBtn().addEventListener('click', () => {
        fetch(baseUrl)
            .then(r => r.json())
            .then(data => {
                let content = '';
                for (const d of Object.values(data)) {
                    content += `${d.author}: ${d.content}\n`;
                }
                html.messages().value = '';
                html.messages().value = content.trim();
            })
            .catch(console.error);
    });

    html.sendBtn().addEventListener('click', () => {
        if (html.author().value === '' || html.content.value === '') {
            return;
        }

        fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify({
                    author: html.author().value,
                    content: html.content().value
                })
            })
            .catch(console.error);

        html.author().value = '';
        html.content().value = '';
    });
}

attachEvents();