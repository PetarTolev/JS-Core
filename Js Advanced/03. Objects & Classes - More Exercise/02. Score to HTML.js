function solve(json) {
    function escapeHtml(unsafe) {
        if (!isNaN(+unsafe)) {
            return unsafe;
        }

        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function createTable(data) {
        const columnNames = Object.keys(data[0]);

        return createTableEl(
            createTableRowEl(
                columnNames.reduce((ths, colName) => ths += createTableHeadingEl(escapeHtml(colName)), '')
            ) +
            data.reduce((trs, currInput) => trs += createTableRowEl(
                columnNames.reduce((tds, colName) => tds += createTableDataEl(escapeHtml(currInput[colName])), '')
            ), '')
        );
    }

    function createTableEl(content) {
        return `<table>\n${content}</table>`;
    }

    function createTableRowEl(content) {
        return `   <tr>${content}</tr>\n`;
    }

    function createTableDataEl(content) {
        return `<td>${content}</td>`;
    }

    function createTableHeadingEl(content) {
        return `<th>${content}</th>`;
    }

    const data = JSON.parse(json);

    return createTable(data);
}