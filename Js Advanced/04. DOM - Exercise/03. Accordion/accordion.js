function toggle() {
    let el = document.getElementById('extra');
    let btn = document.getElementsByClassName('button')[0];

    function changeStyle(element, style, newValue) {
        element.style[style] = newValue;
    }

    function changeInnerText(element, newText) {
        element.innerText = newText;
    }

    if (el.style.display === 'none') {
        changeInnerText(btn, 'Less')
        changeStyle(el, 'display', 'block');
    } else {
        changeInnerText(btn, 'More');
        changeStyle(el, 'display', 'none');
    }
}