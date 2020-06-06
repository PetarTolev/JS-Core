function solve(input) {
    return JSON.stringify(
        input.reduce((a, c) => {
            let [name, level, items] = c.split(' / ');
            items = items ? items.split(', ') : [];
            a.push({ name, level: +level, items })
            return a;
        }, [])
    );
}