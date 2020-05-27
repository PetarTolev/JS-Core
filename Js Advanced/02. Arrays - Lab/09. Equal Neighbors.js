function equalNeighbors(matrix) {
    return matrix.reduce((acc, currentRow, indexRow) => {
        return acc += currentRow.reduce((acc, currentEl, indexEl) => {
            if (currentEl === currentRow[indexEl + 1]) { acc += 1 }
            if (currentEl === (matrix[indexRow + 1] || [])[indexEl]) { acc += 1 }
            return acc;
        }, 0);
    }, 0)
}

function equalNeighbors2(matrix) {
    function intersectVertical(a, b) {
        return a.filter((el, index) => (b || [])[index] === el).length;
    }

    function intersectHorizontal (a) {
        return a.filter((el, index, arr) => el === arr[index + 1]).length;
    }

    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        result += intersectVertical(matrix[i], matrix[i + 1]);
        result += intersectHorizontal(matrix[i]);
    }

    return result;
}