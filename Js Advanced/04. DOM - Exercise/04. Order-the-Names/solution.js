function solve() {
    document.querySelector('button')
        .addEventListener('click', function() {
            let input = document.querySelector('input[type=text]');
            let value = input.value;

            if (!value) {
                return;
            }

            let index = value[0].toUpperCase().charCodeAt() - 65;
            let liElement = document.getElementsByTagName('li')[index];
            let convertedValue = value[0].toUpperCase() + value.slice(1).toLowerCase();

            let text = (liElement.innerText === '') ? convertedValue : liElement.innerText + ', ' + convertedValue;

            liElement.innerText = text;

            input.value = '';
        });
}