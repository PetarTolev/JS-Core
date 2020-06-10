function solve() {
    const btn = document.querySelector('#formatItBtn');

    btn.addEventListener('click', () => {
        let input = document.getElementById('input').textContent;
        let sentences = input.split('.').map(s => s.trim()).filter(s => s !== '');
        let output = document.getElementById('output');

        for (let i = 0; i < sentences.length; i += 3) {
            let paragraphContent = sentences.slice(i, i + 3).join('. ') + '.';
            let pEl = document.createElement('p');
            pEl.textContent = paragraphContent;
            output.appendChild(pEl);
        }
    });
}