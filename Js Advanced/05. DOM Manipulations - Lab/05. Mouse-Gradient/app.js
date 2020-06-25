function attachGradientEvents() {
    let element = document.querySelector('#gradient');
    let width = Number(element.offsetWidth);

    element.addEventListener('mousemove', (e) => {
        document.getElementById('result').textContent = Math.floor(e.offsetX / width * 100) + '%';
    });
}