function solve(input) {
    let systems = {};

    for (const line of input) {
        let [system, component, subcomponent] = line.split(' | ');
        
        if (!systems.hasOwnProperty(system)) {
            systems[system] = {};
        }

        if (!systems[system].hasOwnProperty(component)) {
            systems[system][component] = [];
        }

        systems[system][component].push(subcomponent);
    }

    let keys = Object.keys(systems);

    for (const system of keys) {
        console.log(system);
        for (const component in systems[system]) {
            console.log('|||' + component);
            for (const subcomponent of systems[system][component]) {
                console.log('||||||' + subcomponent);
            }
        }
    }
}