(() => {
    return {
        add: (vec1, vec2) => [vec1[0] + vec2[0], vec1[1] + vec2[1]],
        multiply: (vec1, scalar) => [vec1[0] * scalar, vec1[1] * scalar],
        length: (vec1) => Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2)),
        dot: (vec1, vec2) => vec1[0] * vec2[0] + vec1[1] * vec2[1],
        cross: (vec1, vec2) => (vec1[0] * vec2[1]) - (vec2[0] * vec1[1]),
    }
})();