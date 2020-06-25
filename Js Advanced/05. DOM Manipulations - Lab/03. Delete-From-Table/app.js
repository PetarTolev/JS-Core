function deleteByEmail() {
    const input = document.querySelector(`input[type=text]`);
    const result = document.querySelector('#result');
    const elementForDelete = [...document.querySelectorAll('td:nth-child(2)')]
        .find(e => e.innerText === input.value);

    if (elementForDelete !== undefined) {
        elementForDelete.parentNode.remove();
        result.innerText = 'Deleted.';
        return;
    }

    result.innerText = 'Not found.'
}