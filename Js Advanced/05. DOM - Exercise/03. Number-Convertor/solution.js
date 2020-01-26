function solve() {
    let options = ['Binary', 'Hexadecimal'];

    let menuTo = document.getElementById('selectMenuTo');

    for (let i = 0; i < options.length; i++) {
        let option = document.createElement('option');
        option.setAttribute('value', options[i])
        option.text = options[i];
        menuTo.appendChild(option);
    }

    function convert() {
        let number = document.getElementById('input').value;
        let resultElement = document.getElementById('result');

        let numberSystem = menuTo.value;
        let resultValue;

        if (numberSystem === 'Hexadecimal') {
            resultValue = (+number).toString(16).toUpperCase();
        }
        else if (numberSystem === 'Binary') {
            resultValue = (+number).toString(2);
        }

        resultElement.value = resultValue;
    }

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', convert);
}