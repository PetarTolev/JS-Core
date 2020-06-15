function solve() {
    let oldElement;

    [...document.querySelectorAll('tbody tr')].forEach(el => {
        el.addEventListener('click', function(e) {
            let target = e.currentTarget;

            if (oldElement === target) {
                target.style.backgroundColor = '';
                oldElement = undefined;
                return;
            }

            if (oldElement !== undefined) {
                oldElement.style.backgroundColor = '';
            }

            oldElement = target;
            target.style.backgroundColor = '#413f5e';
        });
    });
}