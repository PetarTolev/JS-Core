function createTable(input) {
    function createElement(tag, content) {
        return `<${tag}>${content}</${tag}>`
    }

    function createRow(props, innerTag) {
        return '   ' + createElement(
            'tr',
            props.reduce((a, c) => {
                let content = isNaN(c) ? escapeHtml(c) : c;
                return a += createElement(innerTag, content);
            }, '')
        ) + '\n';
    }

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    let res = '<table>\n';
    let rows = JSON.parse(input);
    let props = Object.keys(rows[0]);

    res += createRow(props, 'th');

    for (const row of rows) {
        let vals = Object.values(row);
        res += createRow(vals, 'td');
    }

    return res += '</table>';
}