function solve() {
    let selectMenuElement = document.getElementById('selectMenuTo');
    selectMenuElement[0].value = 'Binary';

    console.log(selectMenuElement);
    

    let opt = document.createElement('option');
    let optBinary = document.createTextNode('Binary');


    opt.appendChild(optBinary);

    selectMenuElement.appendChild(opt);
}