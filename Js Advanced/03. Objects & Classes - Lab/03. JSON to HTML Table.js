function fromJSONToHTMLTable(input) {
    let parsedInput = JSON.parse(input);

    let result = '<table>\n'
    let keys = Object.keys(parsedInput[0]);

    result += '   <tr>'
    for (const key of keys) {
        result += `<th>${key}</th>`
    }
    result += '</tr>\n'

    for (const obj of parsedInput) {
        result += '   <tr>';
        for (const key in obj) {
            result += `<td>${escapeHTML(obj[key])}</td>`;
        }
        result += '</tr>\n';
    }

    result += '</table>'
    console.log(result);

    function escapeHTML(str) {
        if (isNaN(str)) {
            str = str
                .replace(/&/g, "&amp;")
                .replace(/>/g, "&gt;")
                .replace(/</g, "&lt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");

            return str;
        }
        return str;
    }
}