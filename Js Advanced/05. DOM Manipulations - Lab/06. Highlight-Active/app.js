function focus() {
    [...document.querySelectorAll('input')].forEach(e => {
        e.addEventListener('focus', () => {
            e.parentNode.classList.add('focused');
        });

        e.addEventListener('blur', () => {
            e.parentNode.classList.remove('focused');
        })
    });
}