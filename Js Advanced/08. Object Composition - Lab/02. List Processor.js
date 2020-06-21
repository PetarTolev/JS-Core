function solve(data) {
    const commands = {
        add,
        remove,
        print
    };

    let res = [];

    function add(str) {
        res.push(str);
    }

    function remove(str) {
        while (res.indexOf(str) != -1) {
            res.splice(res.indexOf(str), 1);
        }
    }

    function print() {
        console.log(res.join(','));
    }

    data.forEach(e => {
        const [command, param] = e.split(' ');

        commands[command](param);
    });
}