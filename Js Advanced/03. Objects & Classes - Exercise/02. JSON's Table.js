function createJSONTable(input) {
    function genInd(n) {
        return '    '.repeat(n);
    }

    let res = '<table>\n';

    for (let i = 0; i < input.length; i++) {
        res += `${genInd(1)}<tr>\n`;

        for (const content of Object.values(JSON.parse(input[i]))) {
            res += `${genInd(2)}<td>${content}</td>\n`
        }

        res += `${genInd(1)}</tr>\n`;
    }
    return res += '</table>';
}