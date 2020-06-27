function validate() {
    document.querySelector('input')
        .addEventListener('change', (e) => {
            if (e.target.value.match(/[a-zA-Z\d]+@[a-zA-Z\d]+.[a-z]+/)) {
                e.target.classList.remove('error');
            } else {
                e.target.classList.add('error');
            }
        });
}