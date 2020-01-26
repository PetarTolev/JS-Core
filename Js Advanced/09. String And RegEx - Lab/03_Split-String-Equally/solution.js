function solve() {
    let textElement = document.getElementById('text').value;
    let numberElement = document.getElementById('number').value;
    let resultElement = document.getElementById('result');

    let num = Number(numberElement);

    let result = [];

    if (num > textElement.length) {
        let piece = textElement;

        while(piece.length != num){
        piece += textElement.substr(0, num - piece.length);
        }

        result.push(piece);
    }
    else if (num < textElement.length) {
        for (let i = 0; i < textElement.length; i += num) {
            let piece = textElement.substr(i, num);

            if (piece.length < num) {
                piece += textElement.substr(0, num - piece.length)
            }

            result.push(piece);
        }
    }

    resultElement.innerHTML = result.join(' ');
}