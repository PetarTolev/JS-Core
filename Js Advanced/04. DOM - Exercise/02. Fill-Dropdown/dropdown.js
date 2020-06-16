function addItem() {
    let textEl = document.getElementById('newItemText');
    let valueEl = document.getElementById('newItemValue');
    let menuEl = document.getElementById('menu');

    let optionEl = document.createElement('option');
    optionEl.value = valueEl.value;
    optionEl.textContent = textEl.value;
    menuEl.appendChild(optionEl);

    textEl.value = '';
    valueEl.value = '';
}