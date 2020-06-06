function solve(input) {
    let res = input.reduce((a, c) => {
        let [system, component, subcomponent] = c.split(' | ');

        if (!a.hasOwnProperty(system)) {
            a[system] = {};
        }

        if (!a[system].hasOwnProperty(component)) {
            a[system][component] = [];
        }

        a[system][component].push(subcomponent);

        return a;
    }, {});

    Object.entries(res).sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]);
    }).forEach(([system, component]) => {
        console.log(system);
        Object.entries(component).sort((a, b) => {
            return b[1].length - a[1].length;
        }).forEach(([component, subcomponent]) => {
            console.log('|||' + component)
            subcomponent.forEach(s => console.log('||||||' + s))
        })
    });
}