function solve() {;
    const dropDown = document.querySelector('#dropdown-ul');
    const box = document.querySelector('#box');

    function expand() {
        dropDown.style.display = 'block';
    }

    function shrink() {
        dropDown.style.display = 'none';
        box.style.backgroundColor = 'black';
        box.style.color = 'white';
    }

    document.querySelector('#dropdown').addEventListener('click', function() {
        if (dropDown.style.display === 'block') {
            shrink();
        } else {
            expand();
        }
    });

    dropDown.addEventListener('click', function(e) {
        const color = e.target.innerText;
        box.style.backgroundColor = color;
        box.style.color = 'black';
    });
}