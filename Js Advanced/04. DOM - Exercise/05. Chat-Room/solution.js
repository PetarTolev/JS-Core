function solve() {
    let btn = document.querySelector('#send');

    function addClasses(element, classes) {
        classes.forEach(c => {
            element.classList.add(c);
        });
    }

    btn.addEventListener('click', () => {
        let messageText = document.querySelector('#chat_input');
        let messageEl = document.createElement('div');

        addClasses(messageEl, ['message', 'my-message']);
        messageEl.innerText = messageText.value;

        let allMessagesEl = document.querySelector('#chat_messages');
        allMessagesEl.appendChild(messageEl);

        messageText.value = '';
    })
}