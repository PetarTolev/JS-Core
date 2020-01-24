function solve(input) {
    let result = '<table>\n';
    result += '   <tr><th>name</th><th>score</th></tr>\n';

    for (const obj of JSON.parse(input)) {
        result += `   <tr><td>${escapeHTML(obj.name)}</td><td>${obj.score}</td></tr>\n`;
    }

    result += '</table>';
    console.log(result);

    function escapeHTML(str) {
        str = str
            .replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

        return str;
    }
}