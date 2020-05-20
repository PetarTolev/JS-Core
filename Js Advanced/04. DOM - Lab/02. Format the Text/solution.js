function solve() {
    const inputText = document.getElementById('input').textContent;
    const outputElement = document.getElementById('output');

    const sentences = inputText.match( /[^\.!\?]+[\.!\?]+/g );

    let startIndex = 0;

    while(startIndex < sentences.length){
        const p = document.createElement('p');
        
        p.textContent = sentences.slice(startIndex, startIndex + 3).join(' ');
        startIndex += 3;
   
        outputElement.appendChild(p);
    }
}