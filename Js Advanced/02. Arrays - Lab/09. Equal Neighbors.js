function equalNeighbors(matrix) {
    return matrix.reduce((acc, currentRow, indexRow) => {
        return acc += currentRow.reduce((acc, currentEl, indexEl) => {
            if (currentEl === currentRow[indexEl + 1]) { acc += 1 }
            if (currentEl === (matrix[indexRow + 1] || [])[indexEl]) { acc += 1 }
            return acc;
        }, 0);
    }, 0)
}