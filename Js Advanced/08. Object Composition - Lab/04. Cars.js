function solve(data) {
    const commandMap = {
        create: (acc, name, _, parentName) => {
            if (!parentName) {
                acc[name] = {};
                return acc;
            }
            const parent = acc[parentName];
            acc[name] = Object.create(parent);
            return acc;
        },
        set: (acc, name, propName, propValue) => {
            acc[name][propName] = propValue;
            return acc;
        },
        print: (acc, name) => {
            let res = [];
            for (const e in acc[name]) {
                res.push(`${e}:${acc[name][e]}`);
            }

            console.log(res.join(', '));
            return acc;
        }
    };

    data.reduce((acc, curr) => {
        const [command, name, param1, param2] = curr.split(' ');

        return commandMap[command](acc, name, param1, param2);
    }, {});
}