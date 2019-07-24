function solve() {
    let text = document.getElementById("createContent").value;

    console.log(text);

    let sentences = text.match(/[^\.!\?]+[\.!\?]+/g);

    let output = document.getElementById("output");

    console.log(sentences);

    for (let i = 0; i < sentences.length; i += 3) {
        let p = document.createElement('p');

        if (sentences.length - i > 3) {
            p.textContent = sentences[i] + sentences[i + 1] + sentences[i + 2];
        }
        else {
            for (let index = i; index < sentences.length; index++) {
                p.textContent += sentences[index];
            }
       }
       
       output.appendChild(p);
    }
}