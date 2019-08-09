function solve() {
    const input = document.getElementById('array').value;
    const inputArray = JSON.parse(input);
    const specialKey = inputArray[0];
    let text = inputArray[1];

    const stringPatternt = `${specialKey}[ ]+([A-Z|!|%|$|#]{8,})[ |,|.|]`
    const patternt = RegExp(stringPatternt, 'gi');

    let matches = patternt.exec(text);

    String.prototype.replaceBetween = function (start, end, what) {
        return this.substring(0, start) + what + this.substring(end);
    };

    while (matches !== null) {
        if (matches[1] === matches[1].toUpperCase()) {
            console.log(matches);

            const startIndex = text.indexOf(matches[1]);
            const endIndex = matches[1].length + startIndex;

            let stringForRepace = matches[1];
            let decodedStringForReplace = '';
            for (i = 0; i < stringForRepace.length; i++) {
                const currentChar = stringForRepace[i];

                if (currentChar === '!') {
                    decodedStringForReplace += '1';
                }
                else if (currentChar === '%') {
                    decodedStringForReplace += '2';
                }
                else if (currentChar === '#') {
                    decodedStringForReplace += '3';
                }
                else if (currentChar === '$') {
                    decodedStringForReplace += '4';
                }
                else if (currentChar === currentChar.toUpperCase()) {
                    decodedStringForReplace += currentChar.toLowerCase();
                }
                else {
                    decodedStringForReplace += currentChar;
                }
            }

            text = text.replaceBetween(startIndex, endIndex, decodedStringForReplace);
        }

        matches = patternt.exec(text);
    }

    const result = document.getElementById('result');
    result.innerHTML = `Result: ${text}`;
}
