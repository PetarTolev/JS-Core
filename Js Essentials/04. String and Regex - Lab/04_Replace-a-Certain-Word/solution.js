function solve() {
    let wordElement = document.getElementById('word').value;
    let textAreaElement = JSON.parse(document.getElementById('text').value);
    let resultElement = document.getElementById('result');

    let wordForReplace = textAreaElement[0].split(' ')[2];
    
    for (const line of textAreaElement) {
        let a = line.replace(new RegExp(wordForReplace, 'i'), wordElement);
        let p = document.createElement('p');
        p.innerHTML = a;

        resultElement.appendChild(p);
    }
}